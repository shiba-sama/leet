#lang racket

(require math/number-theory)
(require math/matrix)
(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 11

(define file "data/euler-11.txt")
(define raw (map (λ (str) (string-split str " "))
                 (file->lines file)))

(define ref matrix-ref)

(define lines
   (vector*->matrix
      (for/vector ([line (file->lines file)])
                  (for/vector ([e (string-split line " ")])
                  (string->number e)))))

(for*/fold ([best 0])
           ([x (in-range 17)] [y (in-range 20)])
           (let ([p (for/product ([n (in-range 4)]) (ref lines (+ x n) y))])
                (if (< p best) best p)))

(for*/fold ([best 0])
           ([x (in-range 20)] [y (in-range 17)])
           (let ([p (for/product ([n (in-range 4)]) (ref lines x (+ y n)))])
                (if (< p best) best p)))

(define (+diagonal x0 y0)
    (if (or (< 17 x0) (< 17 y0))
        0
        (for/fold ([best 0])
                  ([x (in-range x0 17)] [y (in-range y0 17)])
                  (let ([p (for/product ([n (in-range 4)]) (ref lines (+ x n) (+ y n)))])
                       (if (< p best) best p)))))
