#lang racket

(require (rename-in racket/base [define fn]))
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 36

;; Find the sum of all numbers, less than one million, which are palindromic in 
;; base 10 and base 2.

(define max 1000001)

(fn (double-palindrome? n)
    (let ([str2 (number->string n 2)] 
          [str10 (number->string n 10)])
         (and (equal? str2 (~> str2 string->list reverse list->string))
              (equal? str10 (~> str10 string->list reverse list->string)))))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(for/sum ([n (in-range max)] 
          #:when (double-palindrome? n)) n)
