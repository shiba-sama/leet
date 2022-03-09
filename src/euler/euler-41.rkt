#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require (only-in srfi/26 cut))
(require threading)
(require (except-in math/number-theory permutations))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 41

; What is the largest n-digit pandigital prime that exists?

(fn (digits->natural nums)
    (~> (map number->string nums) 
        string-append* 
        string->number))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(for*/fold ([best 0])
           ([roof (in-range 9 5 -1)] 
            [p (in-permutations (range 1 roof))]
            [n (in-value (digits->natural p))]
            #:when (and (< best n) (prime? n))) n)
