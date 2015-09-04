(ns {{sanitized}}-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state (atom {:message "Hello om world!"}))

(om/root
 (fn [state owner]
   (reify om/IRender
     (render [_]
       (dom/h1 nil (:message state)))))
 app-state
 {:target (. js/document
             (getElementById "app"))})
