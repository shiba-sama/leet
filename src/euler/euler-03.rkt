#lang racket

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 3

;; What's the largest prime factor of 600,851,475,143?

(require math/number-theory)
(require threading)

(define euler-03 (apply max (prime-divisors 600851475143)))

(time euler-03)
