#lang racket

(require (rename-in racket/base [define def]))
(require (rename-in racket/base [define fn]))
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 14

; Which Collatz number under 1 million leads to the most numbers of recursions?

(fn ++ add1)
(fn (one? x) (= x 1))

;; Finds the number of steps it takes for a Collatz number chain to reach 1.
(fn (collatz [n 0] #:steps [i 0])
    (cond [(one? n)  i]
          [(even? n) (collatz (* n 1/2)     #:steps (++ i))]
          [else      (collatz (+ 1 (* 3 n)) #:steps (++ i))]))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler-14 #:max [max 1000000])
    (for*/fold ([best 0] [seen-at 0] #:result seen-at)
               ([n (in-range 1 (++ max))] 
                [steps (in-value (collatz n))]
                #:break (< max n)
                #:when (< best steps)) (values steps n)))

(time (euler-14))
