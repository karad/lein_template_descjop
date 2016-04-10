# {{name}}

This project build by descjop v0.6.2

FIXME: description

## Requirements

* leiningen 2.6.x +
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
 
Running "download-electron" task
 
Done, without errors.
```

#### Windows user

```
$ lein descjop-init-win
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

and run extern alias `descjop-externs`,

```
$ lein descjop-externs
```

run cljsbuild `lein descjop-once`.

```
$ lein descjop-once

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

development mode use figwheel. run alias `descjop-figwheel`.  before run application.
Open other terminal window.

```
$ lein descjop-figwheel
```

and you can run Electron(Atom-Shell) app.

On Windows:

```
$ .\electron\electron.exe app/dev
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
$ .\electron\electron.exe app/prod
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
$ lein descjop-help          # descjop help
$ lein descjop-init          # init project
$ lein descjop-init-win      # init project for windows user
$ lein descjop-externs       # output externs for develop and production
$ lein descjop-externs-dev   # output externs for develop
$ lein descjop-externs-prod  # output externs for production
$ lein descjop-figwheel      # start figwheel
$ lein descjop-once          # build JavaScript for develop and production
$ lein descjop-once-dev      # build JavaScript for develop
$ lein descjop-once-prod     # build JavaScript for production
```

## License

Copyright ©  FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
