(ns {{name}}-front.core
  (:require  [reagent.core :as reagent :refer [atom]]))

(defonce state (atom {:message "Hello Reagent world"}))

(defn root-component []
  [:h1 (:message @state)
   [:p "with figwheel!"]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))
