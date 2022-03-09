#lang racket

(require (rename-in racket/base [define fn]))
(require (only-in srfi/26 cut))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 18

; Given a bifuricating tree of random digits from 00..99, find the maximum sum
; pathway from one end to end.
;
; 3
; 7 4
; 2 4 6
; 8 5 9 3
;
; Example max sum: 23.

(define raw  (map (cut string-split <> " ") (file->lines "data/euler-18.txt")))
(define rows (reverse (map (curry map string->number) raw)))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(for/fold ([now   (first rows)])
          ([now++ (rest rows)])
          (for/list ([i now] [j (rest now)] [k now++])
                    (+ (max i j) k)))
