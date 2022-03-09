#lang racket

(require math/number-theory)
(require threading)
(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 73

;; How many fractions lie between 1/3 and 1/2 in the sorted set of reduced 
;; proper fractions for d ≤ 12,000?

(fn (farey-check num) (and (< 1/3 num) (< num 1/2)))
(time (count farey-check (farey-sequence 12000)))
