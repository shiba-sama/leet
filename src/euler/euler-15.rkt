#lang racket

(require (rename-in racket/base [define fn]))
(require math/number-theory)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 15

; Pathways through a 2-dimensional square grid from one corner to its opposite 
; diagonal corner.

(fn (grid n)
    (/ (factorial (* n 2))
       (sqr (factorial n))))

(time (grid 20))  ;; → 137846528820
