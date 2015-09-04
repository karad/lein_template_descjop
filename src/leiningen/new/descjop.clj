(ns leiningen.new.descjop
  "Generate a basic Electron(atom-shell) application project."
  (:require [leiningen.new.templates :refer [renderer year project-name
                                             ->files sanitize-ns name-to-path
                                             multi-segment]]
            [leiningen.core.main :as main]))

(defn project-default
  "default descjop template."
  [name]
  (let [render (renderer "descjop")
        main-ns (multi-segment (sanitize-ns name))
        data {:raw-name name
              :name (project-name name)
              :sanitized (name-to-path name)
              :namespace main-ns
              :nested-dirs (name-to-path main-ns)
              :year (year)}]
    (main/info "Generating fresh descjop project.")
    (->files data
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

(defn project-om
  "default descjop template with om.

  ## change from default
  core.cljs -> om__src__core.cljs

  ## change from default
  index.html -> om__app__index.html
  project.clj -> om__project.clj
  "
  [name]
  (let [render (renderer "descjop")
        main-ns (multi-segment (sanitize-ns name))
        data {:raw-name name
              :name (project-name name)
              :sanitized (name-to-path name)
              :namespace main-ns
              :nested-dirs (name-to-path main-ns)
              :year (year)}]
    (main/info "Generating fresh descjop +om project.")
    (->files data
             ["app/index.html" (render "om__app__index.html" data)]
             ["app/js/externs.js" (render "app__js__externs.js" data)]
             ["app/js/main.js" (render "app__js__main.js" data)]
             ["app/package.json" (render "app__package.json" data)]
             ["Gruntfile.js" (render "Gruntfile.js" data)]
             [".gitignore" (render ".gitignore" data)]
             ["package.json" (render "package.json" data)]
             ["project.clj" (render "om__project.clj" data)]
             ["README.md" (render "README.md" data)]
             ["src/{{sanitized}}/core.cljs" (render "src__core.cljs" data)]
             ["src_front/{{sanitized}}_om/core.cljs" (render "om__src__core.cljs" data)]
             "resources")))

(defn descjop
  "An Electron(atom-shell) application project template."
  [name & params]
  (condp = (first params)
    "+om" (project-om name)
    (project-default name)))


