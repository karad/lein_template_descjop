(ns {{name}}-front.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defonce app-state (atom {:message "Hello om world!"}))

(defn mount-root [setting]
  (om/root
   (fn [state owner]
     (reify om/IRender
       (render [_]
         (dom/h1 nil
                 ;; (:message state)
                 (:my-env setting)
                 ))))
   app-state
   {:target (. js/document
               (getElementById "app"))}))

(defn init! [setting]
  (mount-root setting))
