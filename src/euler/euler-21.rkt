#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require math/number-theory)
(require threading)
(require srfi/26)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 21

;; Find the sum of all amicable numbers under 10,000.

(fn sum (curry apply +))

(fn (amicable-pair? n)
    (= n (amicable-sum (amicable-sum n))))

(fn (amicable-sum n)
    (+ (- n) (sum (divisors n))))

(for/sum ([n (in-naturals)]
         #:break (< 10000 n)
         #:when (amicable-pair? n)) n)
