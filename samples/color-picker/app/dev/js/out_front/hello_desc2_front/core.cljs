(ns hello-desc2-front.core
  (:require  [reagent.core :as reagent :refer [atom]]))

(defonce state (atom {:message "Pick a color"}))

(defn root-component []
  [:h1 {:style {:color (:message @state)}} (:message @state)
   [:select {:on-change (fn [x] (swap! state #(assoc % :message (-> x .-target .-value))))}
    (map (fn [x] [:option x]) ["yellow" "aquamarine" "red" "blue" "palegoldenrod" "aliceblue"])]
   [:p "with hahaha!"]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))
