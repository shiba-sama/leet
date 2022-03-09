#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require math/number-theory)
(require threading)
(require (only-in srfi/26 cut))
(require (only-in srfi/1 unfold-right))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 34

; 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
;
; Find the sum of all numbers which are equal to the sum of the factorial of
; their digits.

; natural → list <natural>
(fn (natural->digits num [base 10])
    (unfold-right zero?
                  (cut remainder <> base)
                  (cut quotient <> base)
                  num))

;; n → sum the digits of n!
(fn (digit-factorial-sum nat)
    (for/sum ([n (natural->digits nat)]) (factorial n)))

;; Check if a number is equal to the sum of the digits of (n!).
(fn (okay? nat) 
    (= nat (digit-factorial-sum nat)))

;; 9! * 7 is the natural max of the problem.
(define max (* 7 (factorial 9)))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(for/sum ([n (in-range 145 max)] #:when (okay? n)) n)
