(ns leiningen.new.descjop
  "Generate a basic Electron(atom-shell) application project."
  (:require [leiningen.new.templates :refer [renderer year project-name
                                               ->files sanitize-ns name-to-path
                                               multi-segment]]
            [leiningen.core.main :as main]))

(defn descjop
  "An Electron(atom-shell) application project template."
  [name & params]
  (let [render (renderer "descjop")
        main-ns (multi-segment (sanitize-ns name))
        data {:raw-name name
              :name (project-name name)
              :sanitized (name-to-path name)
              :namespace main-ns
              :nested-dirs (name-to-path main-ns)
              :year (year)}]
    (main/info "Generating fresh 'lein new' descjop project.")
    (->files  data
              ["app/index.html" (render "app__index.html" data)]
              ["app/js/externs.js" (render "app__js__externs.js" data)]
              ["app/js/main.js" (render "app__js__main.js" data)]
              ["app/package.json" (render "app__package.json" data)]
              ["Gruntfile.js" (render "Gruntfile.js" data)]
              [".gitignore" (render ".gitignore" data)]
              ["package.json" (render "package.json" data)]
              ["project.clj" (render "project.clj" data)]
              ["README.md" (render "README.md" data)]
              ["src/{{sanitized}}/core.cljs" (render "src__core.cljs" data)]
             "resources")))
