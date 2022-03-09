#it's almost alarming how fast it islang racket

(require (rename-in racket/base [define fn]))
(require math/number-theory)
(require threading)

(define ++ add1)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 25

; What is the index of the first term in the Fibonacci sequence to contain 1000
; digits?

(fn number-length 
    (λ~> number->string string-length))

(fn (many-digits? n)
    (= 1000 (number-length n)))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler-25 [n 0])
    (if (many-digits? (fibonacci n))
        n
        (euler-25 (++ n))))

(fn (test)
    (for/first ([n (in-naturals)]
                #:when (many-digits? (fibonacci n))) n))

(time (euler-25))
