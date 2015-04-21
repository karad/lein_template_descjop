![logo descjop](man/images/logo.png)


# lein-template-descjop

A Leiningen template for Web based desktop application with Electron(atom-shell) and others.
(now Electron(atom-shell) based only. will build nw.js based later...)

[![Clojars Project](http://clojars.org/descjop/lein-template/latest-version.svg)](http://clojars.org/descjop/lein-template)

## Requirements

* leiningen 2.x +
* node v0.12.x +

## Usage

```
$ lein new descjop YOUR_APP_NAME
```

see your app dir. looks like

```
.
├── README.md
├── app
│   ├── index.html // entry html file
│   ├── js
│   │   ├── cljsbuild-main.js // compiled JavaScript
│   │   ├── externs.js
│   │   └── main.js
│   └── package.json // for Desktop app
├── package.json // for Compile
├── project.clj // compile settings desktop app
└── src
    └── NAMESPACE
        └── core.cljs // ClojureScript in here
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
