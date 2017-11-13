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
   - [Starter template](#starter-template)
   - [What's included](#whats-included)
- [Documentation](#documentation)
  - [Layout](#layout)
    - [Responsive](#responsive)
    - [Grid](#grid)
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
Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.



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

The box-layout you can remove if you don't like the style. Then you've the whole page in the same color. No more grey box. You just have to remove the class `boxed` in `<body>`.

Heinz is created on a 12-box grid. By default it uses the combined grid. There are also other prepared grids which you can use. We offer a large, medium and small. You can see them on the end of the page. The shortcut in the classes defines the choosen grid. For example:

- large = item-span-lg-3
- medium = item-span-md-4
- small = item-span-sm-6

With the grid you can define how many items you'd have in a row. You can also use it without the section-tag.

If you want to design the grid differently, use the Sass Version for advanced transformation. You can get it [here](https://www.google.com).

## Components



### Navigation

Heinz offers you a navigation on top of your page.


On the left side you can fill in your logo and title of the page. The logo you can change by filling in the source `<img src=">"`. Your title you enter between `<span></span>`.

```
<a href="/" class="branding">
    <img src="">
    <span></span>
</a>
```

On the right side of the navbar you find a dropdown menu. It works as a simple list. You can add or remove single items by using `<li><a href="#">Item</a></li>`. There's also a dropdown included. You can find it within the item called "Parent".


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

Heinz offers you a range of modified titles. Choose them by using `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>` and `<h6></h6>`.

If you'd like to have numbered titles you can add `numbered` to your section class.

`<section class="text-styles numbered box">`



**Textstyle**

We prepared lot of different stylings for your running text. To get a general idea here's a list about all the styles.

- text-lead `<p class="text-lead"></p>`
- text-left `<p class="text-left"></p>`
- text-right `<p class="text-right"></p>`
- text center `<p class="text-center"></p>`
- text-justify `<p class="text-justifyn"></p>`
- text-hyphen `<p class="text-hyphen"></p>`
- text-no-hyphen `<p class="text-no-hyphen"></p>`
- text-small `<p class="text-small"></p>`
- text-muted `<p class="text-muted"></p>`
- text-highlighted `<p class="text-highlighted"></p>`


**Blockquote**

For using a blockquote, enter the following code. Fill in your text between `<blockquote>` and `<span>`. The source you can add into `<span></span>`.

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
There are three kinds of video players you can embed into your `index.html`. Two are normal **players**, one with content width and the one oversized. Both you can start and stop with the play button. Enter the soucre into `src=""`. You can add links from the web or use local stored videos.
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

The third one is a display filling **background-video**. Autoplay, loop and muted inclued by default through URL attributes. There's an over-video container that darkens video and adds a grid where you can put textoverlay. You can remove it by delete class `over-video grid` and its content. Enter the soucre into `src=""`. You can add links from the web or use local stored videos.
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
            <h1 class="text-white">Titel</h1>
        </div>
    </div>
</section>
```


### Audio

For insert audio files, copy the following html. Paste it into the body of your `index.html`. Enter your audio source according to the file type into `<source src="">` and the type of your audio file into `type=""`. Unfortunately you can't customize the your audio, because it's not supported by browsers.


```
<audio controls>
    <source src="" type="audio/">
        Your browser does not support the audio element.
</audio>
```

### Slider

We offer you fully prepared sliders in two sizes. Content width and oversized. The Slider has images as background-image and also navigators in spans. Those are enabled automatically in js. You just have to copy the html into your index.html and enter the URL `src="img/"` of you background-images.


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

You can add an additional sidestory to your website. It's a small box on the side of your container. We prepared one for the left side and one for the right side. By clicking the link in the box, an overlay opens where you can add your additional story. The background will be blurred then.

In the box you can add title and lead and most important is the link to the overlay, which you can name however you want. You'll see it in the following html code.

If you want the sidestory on the left side change `sidestory-right` to `sidestory-left`.

Add the code to your body and see how it works.

```
<section class="has-sidestory">
<div class="sidestory sidestory-right box">
    <h2>Title</h2>
    <p>Lead.</p>
    <br>
    <p class="text-center">
        <span class="toggle" data-toggle-overlay="overlay-1">Link to overlay</span>
    </p>
</div>
</section>
```

For creating the content of the overlay you need the following code. You can insert it right after your sidestory or at the end of your `<body>` for a better overview, it doesn't matter.

You can add all kinds of components mentioned into the `<section></section>` of the overlay overlay. It can be as long as you want.


```
<div class="overlay grid" id="overlay-1">
    <section>
        <span class="toggle close">x</span>
        <h1>Title</h1>
    </section>
</div>
```



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
