#lang racket

(require threading)
(require (rename-in racket/base [define fn]))
(require (only-in srfi/26 cut))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 22

(define source "data/euler-22.txt")
(define data (file->string source))

(fn sum (curry apply +))
(fn ++ add1)
(fn unequal? (compose not equal?))

(fn (letters->naturals letters)
    (define uid 
        (for/hash 
            ([l '(a b c d e f g h i j k l m n o p q r s t u v w x y z)]
             [n (in-range 1 27)])
            (values (symbol->string l) n)))
    (map (curry hash-ref uid) letters))

(fn (word->letters word)
    (map string (string->list word)))

(fn name->value
    (λ~> string-downcase
         word->letters
         letters->naturals
         sum))

(define names
    (sort (filter (cut (compose not equal?) <> ",") (string-split data "\""))
          string<?))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler)
    (for/sum ([n names] [i (in-naturals 1)])
             (* i (name->value n))))
    
(euler)
