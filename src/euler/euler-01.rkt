#lang typed/racket

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 1

; Find the sum of all naturals under 1000 that's divisible by either 3 or 5.

(for/sum ([n (in-range 1000)]
          #:when (or (zero? (modulo n 3)) 
                     (zero? (modulo n 5)))) n)
