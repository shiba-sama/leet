#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require (only-in srfi/26 cut))
(require racket/trace)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 6

; Find the difference between the sum of the squares of the first one hundred 
; natural numbers and the square of the sum.

(define square-of-sum  (sqr (for/sum ([n (in-range 1 101)]) n)))
(define sum-of-squares (for/sum ([n (in-range 1 101)]) (sqr n)))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(- square-of-sum 
   sum-of-squares)
