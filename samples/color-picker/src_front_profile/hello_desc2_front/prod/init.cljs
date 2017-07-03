(ns hello-desc2-front.init
    (:require [hello-desc2-front.core :as core]
              [hello-desc2-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
