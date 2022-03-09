#lang racket

(require (rename-in racket/base [define fn]))
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 4

;; Find the largest palindrome made from the product of two 3-digit numbers.

(fn (palindrome? n #:base [b 10])
    (let ([str (number->string n b)])
         (equal? str (~> str string->list reverse list->string))))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler)
    (for*/fold ([best 0])
               ([i (in-range 100 1000)]
                [j (in-range 100 1000)]
                [now (in-value (* i j))]
                #:when (and (< best now) (palindrome? now))) now))

(time (euler))
