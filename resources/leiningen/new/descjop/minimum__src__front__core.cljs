(ns {{name}}-front.core)

(defonce app-state (atom {:message "Hello Minimum app world!"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "app"))]
    (set! (.-innerHTML app) (:my-env setting))))

(defn init! [setting]
  (mount-root setting))
