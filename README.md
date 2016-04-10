![logo descjop](man/images/logo.png)


# lein-template-descjop

A Leiningen template for Web based desktop application with Electron(atom-shell) and others.
(now Electron(atom-shell) based only. will build nw.js based later...)

**Website : [descjop.org/](http://descjop.org/)**

[![Clojars Project](http://clojars.org/descjop/lein-template/latest-version.svg)](http://clojars.org/descjop/lein-template)

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

![Desktop Application pic](man/images/app.png)



## Change log

### 0.6.0

Changes:

- update clojurescript 1.7.122 -> 1.8.40

### 0.5.4 (2015-12-29)

Changes:

- update document
- update electron -> `0.36.1`
- update lein-cljsbuild -> `1.1.2`
- update lein-externs -> `0.1.5`

### 0.5.3 (2015-12-19)

Changes:

- update electron -> `0.36.1`
- change deprecated method `.loadUrl()` to `.loadURL()`
- add `downloadDir` Gruntfile settings. if you want to download electron on current project directory. 
- delete `atom-shell` in `app__index.html`
- change `.gitignore` exclude `electron/*`
- change `crash-reporter.start()` in `resources/leiningen/new/descjop/src__core.cljs` that require `companyName` and `submitURL`

### 0.5.2 (2015-11-19)

Changes:

- update electron -> 0.35.0

### 0.5.1 (2015-10-22)

Changes:

- update electron -> 0.34.0
- update clojurescript -> 1.7.145

### 0.5.0 (2015-10-09)

Changes:

- [om](https://github.com/omcljs/om) also support figwheel. great job [@dvcrn](https://github.com/dvcrn)!
- update electron -> 0.33.6

### 0.4.0 (2015-09-29)

Changes:

- [reagent](https://github.com/reagent-project/reagent) support (with figwheel). good job [@mopemope](https://github.com/mopemope)!
- update electron -> 0.33.3

### 0.3.2 (2015-09-19)

Changes:

- add help command
- update electron -> 0.33.0

### 0.3.1 (2015-09-10)

Changes:

- update electron -> 0.32.2


### 0.3.0 (2015-09-05)

Changes:

- add +om option. [Om](https://github.com/omcljs/om) based template support.

### 0.2.1 (2015-09-03)

Changes:

- update clojurescript -> 1.7.48
- update electron -> 0.31.2
- update grunt-download-electron -> 2.1.2

### 0.2.0 (2015-08-03)

Changes:

- support :optimization :none
- update clojure -> 1.7.0
- update clojurescript -> 1.7.28
- update electron -> 0.30.2

### 0.1.8 (2015-06-22)

Changes:

- update Electron version 0.28.1 to 0.28.2

### 0.1.7 (2015-06-16)

Changes:

- update Electron version 0.27.3 to 0.28.1

### 0.1.6 (2015-06-08)

Changes:

- update Electron version 0.26.1 to 0.27.3

### 0.1.5 (2015-05-22)

Changes:

- update Electron version 0.26.0 to 0.26.1

### 0.1.4 (2015-05-16)

Changes:

- update Electron version 0.25.3 to 0.26.0

### 0.1.3 (2015-05-08)

Changes:

- update Electron version 0.24.0 to 0.25.3
- update grunt-download-electron to 2.1.1

### 0.1.2 (2015-04-22)

Bugfixes:

- change calling how to index.html path (#2, @karad)

### 0.1.1 (2015-04-20)

Bugfixes:

- change grunt task from atom-shell to electron (#1, @karad)

## License

Copyright ©  Kazuhiro Hara (Greative LLC http://greative.jp/)
{:mail kazuhiroh@gmail.com
 :twitter https://twitter.com/kara_d}

Distributed under the MIT License http://opensource.org/licenses/MIT .

## Thanks

- [@kara_d](https://github.com/karad/)
- [@mopemope](https://github.com/mopemope)
- [@dvcrn](https://github.com/dvcrn)
