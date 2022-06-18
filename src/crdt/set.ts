// —————————————————————————————————————————————————————————————————————————————
// Environment

const ADD    = "ADD"    as const
const REMOVE = "REMOVE" as const
const UNDO   = "UNDO"   as const

type Action = {
   id: string
   type: "ADD" | "REMOVE"
   value: any
}

/** A map of operation history. */
type Past = { [id: string]: Action[] }

/** A vector clock. */
type Clock = { [id: string]: number }

// —————————————————————————————————————————————————————————————————————————————
// Utility

const not = (x: unknown) => !x
const uid = () => performance.now().toString(36)
   .concat(Math.random().toString(36))
   .replace(/\./g,"")

// —————————————————————————————————————————————————————————————————————————————
// Set

/**
 * A wrapper around a JavaScript `Set` which supports distributed offline-first
 * synchronization and local undo.
 */
class SyncSet<T> {
   set = new Set<T>()
   id = uid()
   past:Past = { [this.id]: [] }
   session:Action[] = []

   static invert(action:Action) {
      switch (action.type) {
         case ADD: return { ...action, type: REMOVE }
         case REMOVE: return { ...action, type: ADD }
      }
   }

   get clock() {
      const clock:Clock = {}
      for (const id in this.past) clock[id] = this.past[id].length
      return clock
   }

   #dispatch(action:Action) {
      if (this.id === action.id) this.session.push(action)
      switch (action.type) {
         case ADD:
            this.set.add(action.value)
            this.past[action.id].push(action)
            break
         case REMOVE:
            this.set.delete(action.value)
            this.past[action.id].push(action)
            break
      }
   }

   deltaClock(remoteClock:Clock) {
      const localClock = this.clock
      const Δclock = {}
      for (const id in localClock) {
         if (not(id in remoteClock)) {
            Δclock[id] = localClock[id]
            continue
         }
         if (remoteClock[id] < localClock[id]) {
            Δclock[id] = localClock[id] - remoteClock[id]
         }
      }
      return Δclock
   }

   // ------------------------------------------------------
   // Local Methods

   add(value) { this.#dispatch({ id: this.id, type: ADD, value }) }
   remove(value) { this.#dispatch({ id: this.id, type: REMOVE, value }) }
   has(value) { return this.set.has(value) }
   undo() {
      if (this.session.length === 0) return 0
      const action = this.session.pop()!
      this.#dispatch(SyncSet.invert(action))
      return this.session.length
   }
   clearSession() { this.session = [] }

   // ------------------------------------------------------
   // Sync

   sync(remotePast:Past) {
      for (const id in remotePast) {
         if (not(id in this.past)) this.past[id] = []
         if (this.past[id].length < remotePast[id].length)
            remotePast[id]
               .slice(this.past[id].length)
               .forEach(action => this.#dispatch(action))
      }
   }

   deltaPast(remoteClock:Clock): Past {
      const Δclock = this.deltaClock(remoteClock)
      const Δpast = {}
      for (const id in Δclock) Δpast[id] = this.past[id].slice(-Δclock[id])
      return Δpast
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Client

type SyncResponse = {
   past:Past
   clock:Clock
}

class Client<T> {
   #remote_address:string
   #crdt:SyncSet<T>
   #retry:number

   constructor(remote_address:string, crdt:SyncSet<T>, retry=10_000) {
      this.#remote_address = remote_address
      this.#crdt = crdt
      this.#retry = retry
   }

   async sync(clock:Clock) {
      const method = "POST"
      const headers = { "Content-Type": "application/json", }
      const body = JSON.stringify(clock)

      const remotePast = await fetch(this.#remote_address, { method, headers, body, })
         .then(r => r.json() as Promise<SyncResponse>)
         .then(({ past, clock }) => {
            this.#crdt.sync(past)
            return this.#crdt.deltaPast(clock)
         })
         .catch(e => new Error("Initial fetch failure: " + e))

      if (remotePast instanceof Error) {
         console.error(remotePast)
         setTimeout(() => this.sync(clock), this.#retry)
         return
      }

      fetch(this.#remote_address, {
         method,
         headers,
         body: JSON.stringify(remotePast)
      })
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

let s1 = new SyncSet<number>()
let s2 = new SyncSet<number>()
let s3 = new SyncSet<number>()
let s4 = new SyncSet<number>()

s1.add(0)
s1.add(1)
s1.add(2)

s2.add(3)
s2.add(4)

s3.add(5)
s3.add(6)

s1.sync(s2.past)

console.log(
   s1.deltaClock(s2.clock)
)
