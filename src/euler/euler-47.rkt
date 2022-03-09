#lang racket

(require math/number-theory)
(require threading)
(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 42

;; Find the first four consecutive integers that each have four distinct prime 
;; factors.

(fn ++ add1)

(fn (four-distinct-factors? n) 
    (~> n factorize length (= 4)))

(fn (list-full? lst) 
    (= 4 (length lst)))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler)
    (for/fold ([lst '()])
              ([n (in-naturals 100)] #:break (list-full? lst))
              (if (four-distinct-factors? n) (cons n lst) null)))

(time (euler))  ;; → '(134046 134045 134044 134043)
