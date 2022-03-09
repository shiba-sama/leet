#lang racket

(require math/number-theory)
(require threading)
(require (rename-in racket/base [define fn]))
(require (only-in srfi/26 cut))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 24

index: [ 0 1 2 3 4 5 6 7 8 9 ]
value: [ 0 1 2 3 4 5 6 7 8 9 ]

positions:

lead   == 0
lead++ == 1
tail   == 9
pivot  == (i:8 v:8)

What is the next ordered permutation?
