#lang racket

(require (rename-in racket/base [define fn]))
(require math/number-theory)
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 8

(define raw  (apply string-append (file->lines "data/euler-08.txt")))
(define data (for/vector ([n raw]) (~> n char->integer (- 48))))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (product-range start)
    (for/product ([n (in-vector data start (+ start 13))]) n))

(fn (euler)
    (for/fold ([best 0])
              ([n (in-range (+ -13 (vector-length data)))])
              (let ([now (product-range n)])
                   (if (< best now) now best))))

(fn (euler-alt)
    (for*/fold ([best 0])
               ([n (in-range (+ -13 (vector-length data)))]
                [now (in-value (product-range n))]
                #:when (< best now)) now))
