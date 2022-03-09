#lang racket

(require math/number-theory)
(require srfi/26)
(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 53

;; For "n choose r" problems, how many unique combinations of the naturals exist
;; where (1) the natural is bigger than 1,000,000 and (2) n can vary [0, 100].

(def valid-inputs (in-range 23 101))
(fn ++ add1)
(fn (big? n) (< 1000000 n))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler)
    (for*/fold ([ways 0])
               ([n valid-inputs] [r (in-range 1 n)])
               (if (big? (binomial n r)) (++ ways) ways)))

(fn (alt)
    (for*/sum ([n valid-inputs] [r (in-range 1 n)]
               #:when (big? (binomial n r))) 1))

(time (alt))
