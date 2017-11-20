<header align="center">
  <p>
  <a href="https://getheinz.com" style="width: 100%; display: block; text-align: center;"><img src="img/logo.png"></a>
</p>
  <h2>Heinz</h2>
  <h3>the storytelling butler</h3>
  <p>
    lightweight, modern, and powerful front-end framework for fast and easy multimedia storytelling.
    </p>
    <p>Made with ❤︎ in Switzerland @ HTW Chur.</p>
</header>
<br />

--------------------------------------------------------------------------------

# Table of Contents
- [Introduction](#introduction)  
   - [Quick start](#quick-start)
   - [Freshness](#freshness)
   - [What's included](#whats-included)
- [Documentation](#documentation)
- [Creators](#creators)
- [Copyright and License](#copyright-and-license)

---
# Introduction

## Quick Start

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- include heinz css -->
    <link href="css/heinz.min.css" rel="stylesheet">

    <title>An Awesome Story Created with Heinz</title>
</head>

<body class="boxed">

    <header class="head">
        <!-- a place for nav or other top content -->
    </header>

    <main class="main grid">
        <section class="box" data-section-title="Title">
            <h1>Your First Section</h1>
            <p>Your First Content</p>
        </section>
    </main>

    <footer class="grid">
        <div class="foot">
            <p>&copy; Heinz &middot; 2017 &middot; <span class="backtotop">Back To Top</span></p>
        </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/heinz.min.js"></script>
</body>

</html>

```

**or**

1. Download the latest release on [getheinz.com](https://getheinz.com/).
2. Open the included `index.html` file.
3. Fill it with your content.
5. And that’s about it — you’re about to come down the stretch and have your very own multimedia story. If you’re unsure about the general structure, keep reading for an example page template.

## Freshness

Heinz is developed for modern browsers only - because the future is awesome.

Always be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Still we used autoprefixer. ;)


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. We provide compiled CSS and JS (`heinz.*`), as well as compiled and minified CSS and JS (`heinz.min.*`).

You'll see something like this:

[Basic version](https://getheinz.com/downloads/heinz.zip) for plug and play:
```
heinz/
├── css/
│   ├── heinz.css
│   └── heinz.min.css
├── fonts/
│   ├── librebaskerville
│   └── worksans
└── js/
    ├── heinz.js
    └── heinz.min.js
```



For Code Masters we created a [Sass Version](https://getheinz.com/downloads/heinz_sass.zip).
_If you don't know how to use Sass and Compilers, this is not for you._

```
heinz_sass/
├── css/
│   ├── heinz.css
│   └── heinz.min.css
├── fonts/
│   ├── librebaskerville
│   └── worksans
├── js/
│   ├── heinz.js
│   └── heinz.min.js
└── sass/
    ├── _overwrite.scss
    ├── _settings.scss
    ├── partials
    ├── toolbox
    └── heinz.scss
```



---
# Documentation

Find the documentation [here](https://getheinz.com/documentation.html).


---
# Creators
- Myriam Frisano
- Sebastian Hubacher
- Nadia Etter
- Pascal Lüthi
- Kyle Smith
- Kim Schläpfer

---
# Copyright and License
Heinz is released under MIT.
