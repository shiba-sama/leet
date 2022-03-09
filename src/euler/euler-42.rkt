#lang racket

(require (rename-in racket/base [define fn]))
(require (only-in srfi/26 cut))
(require math/number-theory)
(require threading)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 42

(define file "data/euler-42.txt")
(define $words (in-list (file->list file)))

(fn sum (curry apply +))

(define uid 
    (for/hash ([s '(a b c d e f g h i j k l m n o p q r s t u v w x y z)]
               [i (in-range 1 27)])
        (values (symbol->string s) i)))

(fn (word->letters word)
    (map string (string->list word)))

(fn (letters->naturals letters)
    (map (cut hash-ref uid <>) letters))

(fn word->natural
    (λ~> string-downcase
         word->letters
         letters->naturals
         sum))

(fn triangle-word? (λ~> word->natural triangle-number?))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(fn (euler-42 words)
    (count triangle-number?
           (map word->natural words)))

(fn (alt words)
    (for/sum ([w words] #:when (triangle-word? w)) 1))

(time (alt $words)) ;; → 162
