#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 9

(define (euclid-triple m n)
   (list (+ (* m m) (* -1 n n))
         (* 2 m n)
         (+ (* m m) (* n n))))

(fn (triangular? a b c)
    (equal? (+ (* a a) (* b b)) 
            (* c c)))

(fn (1000? a b c)
    (= 1000 (+ a b c)))

(fn (ab->c a b)
    (sqrt (+ (* a a) (* b b))))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(for*/first ([a (in-range 500)] 
             [b (in-range 500)] 
             [c (in-value (ab->c a b))]
             #:when (and (1000? a b c) (triangular? a b c)))
            (* a b c))
