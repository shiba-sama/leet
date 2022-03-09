#lang racket

(require math/number-theory)
(require threading)
(require (rename-in racket/base [define fn]))
(require (only-in srfi/26 cut))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 26

(define max 1001)

(fn (natural->list nat #:base [base 10])
    (unfold-right zero?
                  (cut modulo <> 10)
                  (cut quotient <> 10)
                  nat))

(fn (cycle-count nat)

)

(fn (euler n) 
    (/ 1 n))

(for/fold ([best 0] [seen (set)])
          ([d (in-range 2 max)])

)
