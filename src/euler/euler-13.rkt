#lang racket

(require (only-in srfi/1 unfold-right unfold))
(require (rename-in racket/base [define fn]))
(require (only-in srfi/26 cut))
(require math/number-theory)
(require threading)
(fn ++ add1)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 13

(define nums (map string->number (file->lines "data/euler-13.txt")))

; natural → list <natural>
(fn (natural->list num #:base [base 10])
    (unfold-right zero? 
                  (cut modulo <> base) 
                  (cut quotient <> base) 
                  num))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(take (natural->list (apply + nums)) 10)
