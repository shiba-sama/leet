#lang racket

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 5

;; What is the smallest positive number that is evenly divisible by all of the 
;; numbers from 1 to 20?

(define euler-05 (apply lcm (range 1 21))
