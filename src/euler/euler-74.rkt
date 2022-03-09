#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require (only-in srfi/1 unfold-right unfold))
(require (only-in srfi/26 cut))
(require math/number-theory)
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 74

; How many naturals under a million would take exactly 60 steps before looping
; as the start of a digit-factorial-chain?

; Defined problem roof.
(define max 1000000)

(fn ++ add1)

; Unfortunately Racket considers a number to be sequential, and this confuses
; our numeric functions on lists.
(fn (not-serial? x)
    (not (or (list? x) (vector? x))))

; natural → list <natural>
(fn (natural->digits nat #:base [base 10])
    (unfold-right zero?
                  (cut remainder <> base)
                  (cut quotient  <> base)
                  nat))

; list <natural> → natural
(fn (next-chain digits)
    (cond [(not-serial? digits) (error "not sequential type.")])
    (natural->digits (for/sum ([d digits]) (factorial d))))

; Counts the number steps before looping in a digit-factorial-sum chain.
(fn (chain-count n)
    (fn (loop now #:seen [seen (set)] #:steps [steps 0])
        (if (set-member? seen now)
            steps
            (loop (next-chain now)
                  #:seen (set-add seen now)
                  #:steps (++ steps))))
    (loop n)
)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

; Sum all n in range iff n takes 60 steps to loop in a digit-factorial-sum chain.
(for/sum ([n (in-range 1000 max)]
          #:when (= 60 (~> n natural->digits chain-count))) n)
