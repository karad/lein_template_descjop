(ns leiningen.new.descjop
  "Generate a basic Electron(atom-shell) application project."
  (:require [leiningen.new.templates :refer [renderer year project-name
                                             ->files sanitize-ns name-to-path
                                             multi-segment]]
            [leiningen.core.main :as main]
            [clojure.java.io :as io])
  (:import (java.util Properties)))

(declare help-text)

(defn read-project-version [groupid artifact]
  (-> (doto (Properties.)
        (.load (-> "META-INF/maven/%s/%s/pom.properties"
                   (format groupid artifact)
                   (io/resource)
                   (io/reader))))
      (.get "version")))

(defn app-version
  "app version"
  []
  (read-project-version "descjop" "lein-template"))

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
    (main/info "
Generating fresh descjop minimum project.
this template is new version.
you can use old version `$ lein new descjop myapp --template-version 0.5.4`.
")
    (->files data
             ;; for dev
             ["app/dev/index.html" (render "minimum__app__dev__index.html" data)]
             ["app/dev/js/externs.js" (render "app__js__externs.js" data)]
             ["app/dev/js/externs_front.js" (render "app__js__externs__front.js" data)]
             ["app/dev/js/main.js" (render "app__js__main.js" data)]
             ["app/dev/package.json" (render "app__package.json" data)]
             ["src_front_profile/{{sanitized}}_front/dev/conf.cljs" (render "minimum__src__front__profile__dev__conf.cljs" data)]
             ["src_front_profile/{{sanitized}}_front/dev/init.cljs" (render "minimum__src__front__profile__dev__init.cljs" data)]
             ;; for prod
             ["app/prod/index.html" (render "minimum__app__prod__index.html" data)]
             ["app/prod/js/externs.js" (render "app__js__externs.js" data)]
             ["app/prod/js/externs_front.js" (render "app__js__externs__front.js" data)]
             ["app/prod/js/main.js" (render "app__js__main.js" data)]
             ["app/prod/package.json" (render "app__package.json" data)]
             ["src_front_profile/{{sanitized}}_front/prod/conf.cljs" (render "minimum__src__front__profile__prod__conf.cljs" data)]
             ["src_front_profile/{{sanitized}}_front/prod/init.cljs" (render "minimum__src__front__profile__prod__init.cljs" data)]
             ;; other files
             ["src_front/{{sanitized}}_front/core.cljs" (render "minimum__src__front__core.cljs" data)]
             ["Gruntfile.js" (render "Gruntfile.js" data)]
             [".gitignore" (render ".gitignore" data)]
             ["package.json" (render "package.json" data)]
             ["project.clj" (render "minimum__project.clj" data)]
             ["README.md" (render "README.md" data)]
             ["src/{{sanitized}}/core.cljs" (render "src__core.cljs" data)]
             ["src_tools/figwheel_middleware.clj" (render "figwheel_middleware.clj" data)]
             ["resources/empty" (render "empty" data)])))

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
    (main/info "
Generating fresh descjop +om project.
this template is new version.
you can use old version `$ lein new descjop myapp +om --template-version 0.5.4`.
")
    (->files data
             ;; for dev
             ["app/dev/index.html" (render "om__app__dev__index.html" data)]
             ["app/dev/js/externs.js" (render "app__js__externs.js" data)]
             ["app/dev/js/externs_front.js" (render "app__js__externs__front.js" data)]
             ["app/dev/js/main.js" (render "app__js__main.js" data)]
             ["app/dev/package.json" (render "app__package.json" data)]
             ["src_front_profile/{{sanitized}}_front/dev/conf.cljs" (render "om__src__front__profile__dev__conf.cljs" data)]
             ["src_front_profile/{{sanitized}}_front/dev/init.cljs" (render "om__src__front__profile__dev__init.cljs" data)]
             ;; for prod
             ["app/prod/index.html" (render "om__app__prod__index.html" data)]
             ["app/prod/js/externs.js" (render "app__js__externs.js" data)]
             ["app/prod/js/externs_front.js" (render "app__js__externs__front.js" data)]
             ["app/prod/js/main.js" (render "app__js__main.js" data)]
             ["app/prod/package.json" (render "app__package.json" data)]
             ["src_front_profile/{{sanitized}}_front/prod/conf.cljs" (render "om__src__front__profile__prod__conf.cljs" data)]
             ["src_front_profile/{{sanitized}}_front/prod/init.cljs" (render "om__src__front__profile__prod__init.cljs" data)]
             ;; other files
             ["src_front/{{sanitized}}_front/core.cljs" (render "om__src__front__core.cljs" data)]
             ["Gruntfile.js" (render "Gruntfile.js" data)]
             [".gitignore" (render ".gitignore" data)]
             ["package.json" (render "package.json" data)]
             ["project.clj" (render "om__project.clj" data)]
             ["README.md" (render "README.md" data)]
             ["src/{{sanitized}}/core.cljs" (render "src__core.cljs" data)]
             ["src_tools/figwheel_middleware.clj" (render "figwheel_middleware.clj" data)]
             ["resources/empty" (render "empty" data)])))

(defn project-reagent
  "default descjop template with reagent.

  ## change from default
  core.cljs -> reagent__src__core.cljs

  ## change from default
  index.html -> reagent__app__index.html
  project.clj -> reagent__project.clj
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
    (main/info "
Generating fresh descjop +reagent project.
this template is new version.
you can use old version `$ lein new descjop myapp +reagent --template-version 0.5.4`.
")
    (->files data
             ;; for dev
             ["app/dev/index.html" (render "reagent__app__dev__index.html" data)]
             ["app/dev/js/externs.js" (render "app__js__externs.js" data)]
             ["app/dev/js/externs_front.js" (render "app__js__externs__front.js" data)]
             ["app/dev/js/main.js" (render "app__js__main.js" data)]
             ["app/dev/package.json" (render "app__package.json" data)]
             ["src_front_profile/{{sanitized}}_front/dev/conf.cljs" (render "reagent__src__front__profile__dev__conf.cljs" data)]
             ["src_front_profile/{{sanitized}}_front/dev/init.cljs" (render "reagent__src__front__profile__dev__init.cljs" data)]
             ;; for prod
             ["app/prod/index.html" (render "reagent__app__prod__index.html" data)]
             ["app/prod/js/externs.js" (render "app__js__externs.js" data)]
             ["app/prod/js/externs_front.js" (render "app__js__externs__front.js" data)]
             ["app/prod/js/main.js" (render "app__js__main.js" data)]
             ["app/prod/package.json" (render "app__package.json" data)]
             ["src_front_profile/{{sanitized}}_front/prod/conf.cljs" (render "reagent__src__front__profile__prod__conf.cljs" data)]
             ["src_front_profile/{{sanitized}}_front/prod/init.cljs" (render "reagent__src__front__profile__prod__init.cljs" data)]
             ;; other files
             ["src_front/{{sanitized}}_front/core.cljs" (render "reagent__src__front__core.cljs" data)]
             ["Gruntfile.js" (render "Gruntfile.js" data)]
             [".gitignore" (render ".gitignore" data)]
             ["package.json" (render "package.json" data)]
             ["project.clj" (render "reagent__project.clj" data)]
             ["README.md" (render "README.md" data)]
             ["src/{{sanitized}}/core.cljs" (render "src__core.cljs" data)]
             ["src_tools/figwheel_middleware.clj" (render "figwheel_middleware.clj" data)]
             ["resources/empty" (render "empty" data)])))

(defn descjop
  "An Electron(atom-shell) application project template."
  [name & params]
  (cond
    (= name "help") (println help-text)
    (= name "version") (println (str "descjop version is " (app-version)))
    (= (first params) "+om") (project-om name)
    (= (first params) "+reagent") (project-reagent name)
    :else (project-default name)))

(def help-text
  "help text for cli"
  "### (if you don't install grunt yet.)

```
$ npm install -g grunt-cli
```

## Help

You can display help how to use descjop.

```
$ lein new descjop help
```

and you can use alias `descjop-help` in project directory.

```
$ lein descjop-help
```

## New project from leiningen template

### Minimum project

```
$ lein new descjop YOUR_APP_NAME
$ cd YOUR_APP_NAME
```

### [Om](https://github.com/omcljs/om) based project

```
$ lein new descjop YOUR_APP_NAME +om
$ cd YOUR_APP_NAME
```

### [reagent](https://github.com/reagent-project/reagent) based project

```
$ lein new descjop YOUR_APP_NAME +reagent
$ cd YOUR_APP_NAME
```

## Project Directory

see your app dir. looks like

```
.
+-- Gruntfile.js
+-- README.md
+-- app
|   +-- dev // deveropment mode dir
|   |   +-- index.html // entry html file
|   |   +-- js
|   |   |   +-- externs_front.js
|   |   |   +-- externs.js
|   |   |   +-- main.js
|   |   +-- package.json // for Desktop app
|   +-- prod // production mode dir
|       +-- index.html // entry html file
|       +-- js
|       |   +-- externs_front.js
|       |   +-- externs.js
|       |   +-- main.js
|       +-- package.json // for Desktop app
+-- package.json // for Compile
+-- project.clj // compile settings desktop app
+-- resources
+-- src
|   +-- NAMESPACE
|       +-- core.cljs // ClojureScript for Electron in here
+-- src_front
|   +--NAMESPACE_front
|      +-- core.cljs // Frontend clojureScript in here
+-- src_front_profile
    +--NAMESPACE_front
       +-- dev
       |   +-- conf.cljs
       |   +-- init.cljs
       +-- prod
           +-- conf.cljs
           +-- init.cljs
```

## Usage

### step 1

run `descjop-init` (windows user should use `descjop-init-win`) alias below.

#### OSX/Linux user

```
$ lein descjop-init
 ...
 
Running \"download-electron\" task
 
Done, without errors.
```

#### Windows user

```
$ lein descjop-init-win
 ...
 
Running \"download-electron\" task
 
Done, without errors.
```

### step 2

you have to change `src/PROJECT_NAME/core.cljs` about `:companyName` and `submitURL`.

```
(defn -main []
  (.start crash-reporter (clj->js {:companyName \"Your Company Name\"
                                   :submitURL   \"http://example.com/\"}))
  ...
```

### step 3

and run extern alias `descjop-externs`,

```
$ lein descjop-externs
```

run cljsbuild `lein descjop-once`.

```
$ lein descjop-once

Compiling ClojureScript.
Compiling \"app/js/cljsbuild-main.js\" from [\"src\"]...
Successfully compiled \"app/js/cljsbuild-main.js\" in 10.812 seconds.
...
Successfully compiled \"app/dev/js/front.js\" in 10.588 seconds.
...
Successfully compiled \"app/prod/js/cljsbuild-main.js\" in 19.333 seconds.
...
Successfully compiled \"app/prod/js/front.js\" in 29.94 seconds.
```

### step 4

You can run Desctop application.

#### development mode

development mode use figwheel. run alias `descjop-figwheel`.  before run application.
Open other terminal window.

```
$ lein descjop-figwheel
```

and you can run Electron(Atom-Shell) app.

On Windows:

```
$ .\\electron\\electron.exe app/dev
```

On Linux:

```
$ ./electron/electron app/dev
```

On OS X:

```
$ ./electron/Electron.app/Contents/MacOS/Electron app/dev
```

#### production mode

you can run Electron(Atom-Shell) app.

On Windows:

```
$ .\\electron\\electron.exe app/prod
```

On Linux:

```
$ ./electron/electron app/prod
```

On OS X:

```
$ ./electron/Electron.app/Contents/MacOS/Electron app/prod
```

## Aliases

you can use aliases in project directory.

```
$ lein descjop-version       # descjop version
$ lein descjop-help          # descjop help
$ lein descjop-init          # init project
$ lein descjop-externs       # output externs for develop and production
$ lein descjop-externs-dev   # output externs for develop
$ lein descjop-externs-prod  # output externs for production
$ lein descjop-figwheel      # start figwheel
$ lein descjop-once          # build JavaScript for develop and production
$ lein descjop-once-dev      # build JavaScript for develop
$ lein descjop-once-prod     # build JavaScript for production
```
")









