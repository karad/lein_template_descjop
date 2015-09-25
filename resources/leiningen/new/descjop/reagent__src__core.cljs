(ns {{sanitized}}.core
  (:require [figwheel.client :as fw :include-macros true]
            [reagent.core :as reagent :refer [atom]]))

(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback 'mount-root)

(enable-console-print!)

(defonce state (atom {:message "Hello Reagent world"}))

(defn root-component []
  [:h1 (:message @state)
   [:p "with figwheel!"]])

(defn mount-root []
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(init!)
