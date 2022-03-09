#lang racket

(require (rename-in racket/base [define fn]))
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 99

;; Raw data from file split as lines.
(define raw-strings (file->lines "data/euler-99.txt"))

;; A sequence of 2-list of '(base exponent).
(define 2-tuples
    (~> raw-strings
        (map (λ (string)  (string-split string  ","))   _ )
        (map (λ (strings) (map string->number strings)) _ )
        in-list))

;; Translates every (base, exponent) pair into a unique number that preserves
;; the orderings of power: log(b^e) = e * log(base).
(fn (log-identity base exponent)
    (* exponent (log base)))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

;; Finds the greatest value for (log-identity base exponent) from the list of 
;; base-exponent pairs defined above in <2-tuples>.
(for*/fold ([best 0] [seen-at 0] #:result (list best seen-at))
    ([(t index) (in-parallel 2-tuples (in-naturals 1))]
     [now (in-value (log-identity (first t) (second t)))]
     #:when (< best now)) (values now index))
