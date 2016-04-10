(ns {{name}}-front.init
    (:require [{{name}}-front.core :as core]
              [{{name}}-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
