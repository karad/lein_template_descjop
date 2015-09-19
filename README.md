![logo descjop](man/images/logo.png)


# lein-template-descjop

A Leiningen template for Web based desktop application with Electron(atom-shell) and others.
(now Electron(atom-shell) based only. will build nw.js based later...)

**Website : [descjop.org/](http://descjop.org/)**

[![Clojars Project](http://clojars.org/descjop/lein-template/latest-version.svg)](http://clojars.org/descjop/lein-template)

## Requirements

* leiningen 2.x +
* node v0.12.x +

## Usage

You can display help how to use descjop.

```
$ lein new descjop help
```

## Usage : Default project

```
$ lein new descjop YOUR_APP_NAME
```

see your app dir. looks like

```
.
+-- README.md
+-- app
|   +-- index.html // entry html file
|   +-- js
|   |   +-- cljsbuild-main.js // compiled JavaScript
|   |   +-- externs.js
|   |   +-- main.js
|   +-- package.json // for Desktop app
+-- package.json // for Compile
+-- project.clj // compile settings desktop app
+-- src
    +-- NAMESPACE
        +-- core.cljs // ClojureScript in here
```

## Usage : [Om](https://github.com/omcljs/om) based project

```
$ lein new descjop YOUR_APP_NAME +om
```

see your app dir. looks like

```
.
+-- README.md
+-- app
|   +-- index.html // entry html file
|   +-- js
|   |   +-- cljsbuild-main.js // compiled JavaScript
|   |   +-- externs.js
|   |   +-- main.js
|   +-- package.json // for Desktop app
+-- package.json // for Compile
+-- project.clj // compile settings desktop app
+-- src
|   +-- NAMESPACE
|       +-- core.cljs // ClojureScript for Electron in here
+-- src_front
    +--NAMESPACE_om
       +-- core.cljs // Frontend clojureScript in here
```

## Build your Electron(Atom-Shell) app

### step 1

run npm command below.

```
$ npm install -g grunt-cli
$ npm install
$ grunt download-electron

Running "download-electron" task

Done, without errors.
```

and run extern commands,

```
$ lein externs > app/js/externs.js
```

run cljsbuild.

```
$ lein cljsbuild once

Compiling ClojureScript.
Compiling "app/js/cljsbuild-main.js" from ["src"]...
Successfully compiled "app/js/cljsbuild-main.js" in 10.812 seconds.
```

so you can run Electron(Atom-Shell) app.

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

![Desktop Application pic](man/images/app.png)

## Change log

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
