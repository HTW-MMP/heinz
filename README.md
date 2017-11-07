<header>
  <p align="center">
  <a href="https://getheinz.com"><img src="https://getheinz.com/img/logo.svg" width="72" height="72"></a>
</p>
  <h2 align="center">Heinz</h2>
  <h3 align="center">the storytelling butler</h3>
  <p align="center">
    lightweight, modern, and powerful front-end framework for fast and easy multimedia storytelling.
    </p>
    <p align="center">Made with ❤︎ in Switzerland @ HTW Chur.</p>
</header>
<br>

--------------------------------------------------------------------------------

# Table of Contents
- [Introduction](#introduction)  
   - [Quick start](#quick-start)
   - [What's included](#whats-included)
- [Documentation](#documentation)
  - [Layout](#layout)
    - [CSS Grid](#grid)
  - [Components](#components)
    - [Navigation](#navigation)
    - [Progress Bar](#progress-bar)
    - [Text](#text)
    - [Image](#image)
    - [Video](#video)
    - [Audio](#audio)
    - [Slider](#slider)
    - [Sidestory](#sidestory)
- [Creators](#creators)
- [Copyright and License](#copyright-and-license)

---
# Introduction
## Quick Start

1. Download the latest release on [getheinz.com/download](https://getheinz.com/download) into your Project Folder.
2. Open your `index.html` File.
3. Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS:

    ```
    <link rel="stylesheet" href="css/heinz.css">
    ```

4. Add the optional JavaScript near the end of your page, right before the closing `</body>` tag. Be sure to place jQuery first, as our JavaScript depends on that.

      ```
      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="js/heinz.js"></script>
      ```

5. And that’s about it — you’re about to come down the stretch and have your very own multimedia story. If you’re unsure about the general structure, keep reading for an example page template.

## Starter template
Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```

```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. We provide compiled CSS and JS (`heinz.*`), as well as compiled and minified CSS and JS (`heinz.min.*`).

You'll see something like this:

Basic version for simple usecase:
```
heinz/
├── css/
│   ├── heinz.css
│   └── heinz.min.css
└── js/
    ├── heinz.js
    └── heinz.min.js
```



For Code Masters we created a Sass Version. You can get it [here](https://www.google.com).

```
heinz/
├── sass/
│   ├── heinz.scss
│   └── assets/
│        └── settings.css
├── css/
│   └── heinz.css
└── js/
    ├── heinz.js
    └── heinz.min.js
```



---
# Documentation

## Layout

### Responsive
Heinz is fully responsive on all devices.

### Grid

The box-layout you can remove if you want so. How it's done you'll see in the following video: [click here](https://www.google.com).

Combined Grid


## Components



### Navigation

Heinz offers you a navigation on top of your page. On the left side you can fill in your logo and title of the page. The logo you can change it by filling in the source `<img src=">"`. Your title you enter between `<span></span>`.

```
<a href="#" class="branding">
    <img src="img/">
    <span></span>
</a>
```

On the right side of your navigation you find a dropdown menu. It works as a simple list. You can add or remove single items by using `<li><a href="#">Item</a></li>`. There's also a dropdown included. You can find it within the item called "Parent". You can change the title and add or remove single dropdown items.

```
<li class="dropdown">
    <span>parent</span>
    <ul>
        <li><a href="#">Child</a></li>
        <li><a href="#">Child</a></li>
        <li><a href="#">Child</a></li>
    </ul>
</li>
```


### Progressbar

There's a progressbar placed directly on the bottom of the navigation. It is splited similar to the sections. So for every section you have a chapter in the progressbar. The titles are choosen from the sections, adapted to the first title in it. If you don't want those titles, you can remove them by deleting `display-titles` in the class.

```
<div class="scrollspy-wrapper display-titles">
```



### Text

**Title**

Heinz offers you a nice range of modified titles. Choose them by using `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>` and `<h6></h6>`.

If you'd like to have numbered titles you can add `numbered box` to your section class.

`<section class="text-styles numbered box">`



**Textstyle**

We prepared lot of different stylings for your running text. To get a general idea here's a list about all the styles.

- text-lead `<p class="text-lead">`
- text-left `<p class="text-left"></p>`
- text-right `<p class="text-right"></p>`
- text center `<p class="text-center"></p>`
- text-justify `<p class="text-justifyn"></p>`
- text-hyphen `<p class="text-hyphen"></p>`
- text-no-hyphen `<p class="text-no-hyphen"></p>`
- text-small `<p class="text-small"></p>`
- text-muted `<p class="text-muted"></p>`
- text-highlighted `<p class="text-highlighted"></p>`

For using them in your work, copy the code, paste it into the body of your `index.html` and enter your text between the brackets.

**Blockquote**

For using a blockquote, enter the following code. Fill in your text between `<blockquote>` and `<span>`.

```
<blockquote>

    <span></span>
</blockquote>
```


### Image

You can add four different kinds of images:


**Image content-width**

Copy the code and paste it into the `<body>` in your `index.html`. Add the source of your picture into `<img src="">`.
```
<figure class="content-wide">
    <img src="" alt="">
    <figcaption>
        Quellenangabe, <a href="">source</a>
    </figcaption>
</figure>
```


**Oversized image**

Copy the code and paste it into the `<body>` in your `index.html`. Add the source of your picture into `<img src="">`.

```
<figure class="oversized">
    <img src="" alt="">
    <figcaption>
        Quellenangabe, <a href="">source</a>
    </figcaption>
</figure>
```

**Oversized image with textoverlay**

Copy the code and paste it into the `<body>` in your `index.html`. Add the source of your picture into `<img src="">`.

```
<div class="oversized textoverlay">
    <img src="" alt="">
    <div class="overlay-content">This is overlay text</div>
</div>
```



**Full width image**

Copy the code and paste it into the `<body>` in your `index.html`. Add the source of your picture into `<img src="">`.

```
<section class="full-width">
    <figure>
        <img src="" alt="image full width">
        <figcaption>
            full width image <a href=""> source</a>
        </figcaption>
    </figure>
</section>
```

### Video
There are three kinds of video players you can embed into your `index.html`. Two are normal **players**, one with content width and the other is oversized. Both you can start and stop with the play button. Enter the soucre into `src=""`. You can add links from the web or use local stored videos.
Responsive video needs video-wrap and video, because paddinghack does not like to be used in grid.


 **player content-width**


```
<div class="video-wrap">
    <div class="video">
        <iframe width="854" height="480" src="" frameborder="0" gesture="media" allowfullscreen></iframe>
    </div>
</div>
```

**player oversized**

Adding class large will make video bigger. Enter the soucre into `src=""`. You can add links from the web or use local stored videos.
Responsive video needs video-wrap and video, because paddinghack does not like to be used in grid.


```
<div class="video-wrap large">
    <div class="video">
        <iframe width="854" height="480" src="" frameborder="0" gesture="media" allowfullscreen></iframe>
    </div>
</div>
```

**background-video**

The other one is a display filling **background-video**. Autoplay, loop and muted inclued by default through URL attributes. There's an over-video container that darkens video and adds a grid where you can put textoverlay. You can remove it by delete class `over-video grid` and its content. Enter the soucre into `src=""`. You can add links from the web or use local stored videos.
Responsive video needs video-wrap and video, because paddinghack does not like to be used in grid.


```
<section class="full-width">
    <div class="video-wrap">
        <div class="video">>
            <iframe src=""></iframe>
        </div>
    </div>
    <div class="over-video grid">
        <div class="item-span-8 item-offset-2">
            <h1 class="text-white">TItel</h1>
        </div>
    </div>
</section>
```


### Audio

For insert audio files, copy the following html and css. Paste it into the body of your `index.html`. Enter your audio source according to the file type into `<source src="">`.


```
<audio class="audio" controls>
  <source src="" type="audio/ogg">
  <source src="" type="audio/mpeg">
  <source src="" type="audio/wav">
</audio>
```

### Slider

We offer you fully prepared sliders in two sizes. Content width and oversized. The Slider has images as background-image and also navigators in spans. Those are enabled automatically in js. You just have to copy the html into your index.html and enter the URL `src="img/"` of you background-image.

**Slider content-width**


```
<div class="slider-wrap">
    <div class="slider">
        <div style="background-image: url(img/)"><img src="img/" alt="slide 1"></div>
        <div style="background-image: url(img/)"><img src="img/.jpg" alt="slide 2"></div>
        <div style="background-image: url(img/)"><img src="img/.jpg" alt="slide 3"></div>
    </div>
    <span class="navigator toggle-next">next</span>
    <span class="navigator toggle-prev">prev</span>
</div>
```

**Slider oversized**

Adding class large makes slider bigger.


```
<div class="slider-wrap large">
    <div class="slider">
        <div style="background-image: url(img/)"><img src="img/" alt="slide 1"></div>
        <div style="background-image: url(img/)"><img src="img/" alt="slide 2"></div>
        <div style="background-image: url(img/)"><img src="img/" alt="slide 3"></div>
    </div>
    <span class="navigator toggle-next">next</span>
    <span class="navigator toggle-prev">prev</span>
</div>
```




### Sidestory

Erkennbar an der Box auf der Seite. Bei Klick öffnet sich Overlay.
ist in einer eigener section called sidestory



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
