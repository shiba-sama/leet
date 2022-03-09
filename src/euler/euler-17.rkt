#lang racket

(require math/number-theory)
(require threading)
(require (rename-in racket/base [define fn]))
(require (rename-in racket/base [define def]))
(require srfi/26)

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Project Euler
;; Problem 17

#| If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
   then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

   If all the numbers from 1 to 1000 (one thousand) inclusive were written out 
   in words, how many letters would be used?

   NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and 
   forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 
   letters. The use of "and" when writing out numbers is in compliance with 
   British usage.
|#

(def ones    '("one" "two" "three" "four" "five" "six" "seven" "eight" "nine"))
(def 11..19  '("eleven" "twelve" "thirteen" "fourteen" "fifteen" "sixteen" "seventeen" "eighteen" "nineteen"))
(def tens    '("twenty" "thirty" "forty" "fifty" "sixty" "seventy" "eighty" "ninety"))
(def hundreds (foldl (λ (n state) (append state (list (format "~a hundred" n))))
                     '()
                     ones ))

(fn (tensRange ten)
    (foldl (λ (one state) (append state (list (format "~a ~a" ten one))))
           (list ten)
           ones ))

(fn (hundredsRange hundred)
    (foldl (λ (t state) (append state (list (format "~a and ~a" hundred t))))
           (list hundred)
           1..99 ))

(def 1..19  (append ones '("ten") 11..19))
(def 20..99 (flatten (map tensRange tens)))
(def 1..99  (append 1..19 20..99))
(def 1..999 (append 1..99 (flatten (map hundredsRange hundreds))))

;; ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
;; Solve

(string-length (apply string-append (cons "onethousand" (map (cut string-replace <> " " "") 1..999))))
