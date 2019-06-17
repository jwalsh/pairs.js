;;; pairs.el --- Pairs with first and rest           -*- lexical-binding: t; -*-

;; Copyright (C) 2018  Jason Walsh
;; Author: Jason Walsh <j@wal.sh>

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;;; Commentary:
;;

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;;; Code:

(defun pair (_first _rest)
  (lambda (_)
    (_ _first _rest)))

(defun first (_pair)
  (lambda (_first _rest)
    _first))

(defun first (_pair)
  (lambda (_first _rest)
    _rest))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; pairs.el ends here
