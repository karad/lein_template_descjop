# {{name}}

This project build by descjop v0.6.0

FIXME: description

## Requirements

* leiningen 2.x +
* node v0.12.x +
* grunt v0.1.13 +

### (if you don't install grunt yet.)

```
$ npm install -g grunt-cli
```


## Help

You can display help how to use descjop.

```
$ lein new descjop help
```

and you can use alias in project directory.

```
$ lein dsjp-help
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

run `dsjp-init` alias below.

```
$ lein dsjp-init
 ...
 
Running "download-electron" task
 
Done, without errors.
```

### step 2

you have to change `src/PROJECT_NAME/core.cljs` about `:companyName` and `submitURL`.

```
(defn -main []
  (.start crash-reporter (clj->js {:companyName "Your Company Name"
                                   :submitURL   "http://example.com/"}))
  ...
```

### step 3

and run extern alias `dsjp-externs`,

```
$ lein dsjp-externs
```

run cljsbuild `lein dsjp-once`.

```
$ lein dsjp-once

Compiling ClojureScript.
Compiling "app/js/cljsbuild-main.js" from ["src"]...
Successfully compiled "app/js/cljsbuild-main.js" in 10.812 seconds.
...
Successfully compiled "app/dev/js/front.js" in 10.588 seconds.
...
Successfully compiled "app/prod/js/cljsbuild-main.js" in 19.333 seconds.
...
Successfully compiled "app/prod/js/front.js" in 29.94 seconds.
```

### step 4

You can run Desctop application.

#### development mode

development mode use figwheel. run alias `dsjp-figwheel`.  before run application.
Open other terminal window.

```
$ lein dsjp-figwheel
```

and you can run Electron(Atom-Shell) app.

On Windows:

```
$ .\electron\electron.exe app
```

On Linux:

```
$ ./electron/electron app
```

On OS X:

```
$ ./electron/Electron.app/Contents/MacOS/Electron app
```

#### production mode

you can run Electron(Atom-Shell) app.

On Windows:

```
$ .\electron\electron.exe app
```

On Linux:

```
$ ./electron/electron app
```

On OS X:

```
$ ./electron/Electron.app/Contents/MacOS/Electron app
```

## Aliases

you can use aliases in project directory.

```
$ lein dsjp-help          # descjop help
$ lein dsjp-init          # init project
$ lein dsjp-externs       # output externs for develop and production
$ lein dsjp-externs-dev   # output externs for develop
$ lein dsjp-externs-prod  # output externs for production
$ lein dsjp-figwheel      # start figwheel
$ lein dsjp-once          # build JavaScript for develop and production
$ lein dsjp-once-dev      # build JavaScript for develop
$ lein dsjp-once-prod     # build JavaScript for production
```

## License

Copyright ©  FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
