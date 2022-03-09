#lang racket

(require (rename-in racket/base [define fn]))
(require math/number-theory)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 72

; How many elements would be contained in the set of reduced proper fractions 
; for a denominator equal to or lesser than 1,000,000?

; The problem has been re-interpreted as the sum of totients from 2 to the
; problem max.

(fn (euler [max 1000001]) 
    (for/sum ([n (in-range 2 max)])
             (totient n)))

(time (euler))
