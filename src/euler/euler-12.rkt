#lang racket

(require (rename-in racket/base [define fn]))
(require math/number-theory)
(require threading)
(fn ++ add1)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 12

; What's the first triangle number with over 500 divisors?

(fn (triangle n)
    (* 1/2 (+ n (* n n))))

(fn (okay? n)
    (~> n divisors length (< 500 _ )))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler [s 0] [v 1])
    (if (okay? s)
        s
        (euler (+ s v) (++ v))))

(fn (alt-0)
    (for*/first ([n (in-naturals)]
                 [v (in-value (triangle n))]
                 #:when (okay? v)) v))

(fn (alt-1)
    (for/fold ([s 0])
              ([v (in-naturals 1)] #:break (okay? s))
              (+ s v)))

(time (alt-1))
