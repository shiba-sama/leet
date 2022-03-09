#lang racket

(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require math/number-theory)
(require (only-in srfi/26 cut))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 7

; What is the 10,001st prime number?

(fn ++ add1)

(fn (euler-7 [max 10001])
    (for/fold ([seen 0] [current 0] #:result current)
              ([n (in-naturals)] #:when (prime? n) #:break (= seen max))
              (values (++ seen) n)))

(time (euler-7))
