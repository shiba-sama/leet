#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 20

; Find the sum of the digits in the number 100!

(fn -- sub1)
(fn sum (curry apply +))

; finds the nth factorial
(fn (factorial n #:product [p 1])
    (if (zero? n)
        p
        (factorial (-- n) #:product (* n p))))

; natural → list <digits>
(fn (natural->digits num [base 10])
    (unfold-right zero?
                  (cut remainder <> base)
                  (cut quotient <> base)
                  num ))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solution

(define euler-20 
    (~> (factorial 100)
        natural->digits 
        sum))

euler-20  ;; → 648
