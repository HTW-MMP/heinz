<header align="center">
  <p>
  <a href="https://getheinz.com"><img src="https://getheinz.com/img/heinz_logo.svg" width="72" height="72"></a>
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
  - [Layout](#layout)
    - [Responsive](#responsive)
    - [Grid](#grid)
  - [Components](#components)
    - [Nav Bar](#nav-bar)
      - [Navigation](#navigation)
      - [Progress Bar](#progress-bar)
    - [Text](#text)
      - [Headings](#headings)
      - [Paragraph Styles](#paragraph-styles)
      - [Blockquote](#blockquote)
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

```
```

**or**

1. Download the latest release on [getheinz.com](https://getheinz.com/).
2. Open the included `index.html` file.
3. Fill it with your content.
5. And that’s about it — you’re about to come down the stretch and have your very own multimedia story. If you’re unsure about the general structure, keep reading for an example page template.

## Freshness

Heinz is developed for modern browsers only - because the future is awesome.

Always be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.


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

## Layout

### Responsive
Heinz is fully responsive and working on all devices.

### Grid

If you don't like the gray background and boxed look of the design, you can simply remove the `boxed` class from the body tag and achieve a flat white look.

Heinz is created using a 12-column grid. You can define a separate grid outside of our prepared layout, just make sure to add the `grid` class to your parent.

The Children of the grid can vary in width. The class `item-span-suffix-columnNumbers` defines the behaviour of the item. There are different classes to help you manage the breakpoints. the `-lg` suffix describes the item-span up until the breakpoint for medium screen size, `-md` up until the small breakpoint `-sm` up until extra small. To create a fully responsive layout, it is recommended to combine the classes. As an example to create a grid that has 4 items in a row on large screens, 3 items on medium, 2 on small and 1 on extra small, you'd apply 3 classes to your grid item.

```
<div class="item-span-lg-3 item-span-md-4 item-span-sm-6"></div>
```

Take a look at [these examples](https://getheinz.com/documentation.html#grid) to visualize, try resizing the window to see the behaviour.

If you want to design the grid differently, use the [Sass Version](https://getheinz.com/downloads/heinz_sass.zip) for advanced transformation.

## Components



### Navbar

***This feature requires JavaScript***


The Navbar in our example consists of the Navigation as well a visual representation of the sections and a progressbar.

We recommend placing this Code in the `<header>`:

```
<nav class="menu boxed">
    <div class="bar">
        <a href="/" class="branding">
            <!-- Brand -->
        </a>
        <span class="nav-toggle">
            <svg version="1.1" id="hamburger" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 77.3 67.6" style="enable-background:new 0 0 77.3 67.6;" xml:space="preserve"><path d="M73.4,37.6H3.8c-2.1,0-3.8-1.7-3.8-3.8l0,0C0,31.7,1.7,30,3.8,30h69.7c2.1,0,3.8,1.7,3.8,3.8l0,0 C77.3,35.9,75.6,37.6,73.4,37.6z"/><path d="M73.4,7.6H3.8C1.7,7.6,0,5.9,0,3.8l0,0C0,1.7,1.7,0,3.8,0h69.7c2.1,0,3.8,1.7,3.8,3.8l0,0C77.3,5.9,75.6,7.6,73.4,7.6z"/><path d="M73.4,67.6H3.8c-2.1,0-3.8-1.7-3.8-3.8l0,0C0,61.7,1.7,60,3.8,60h69.7c2.1,0,3.8,1.7,3.8,3.8l0,0 C77.3,65.9,75.6,67.6,73.4,67.6z"/></svg>
        </span>

        <!-- Navigation Code Here -->
    </div>

    <!-- Progressbar Code Here -->
</nav>
```

#### Navigation

On the left, you'll include all brandings. We planned for it to consist of a small logo as well as a short title.

```
<a href="/" class="branding">
    <img src="icon.svg">
    <span>Story Title</span>
</a>
```

On the right, you have the option to include a list of links. The Menu comes with a dropdown option.

Don't forget to include the `nav-toggle` and include the `heinz.js` to make sure the menu will work responsively and that the dropdowns will open up.


```
<ul>
    <li><span class="nav-toggle">close</span></li>
    <li><a href="#">Item</a></li> <!-- normal Item -->
    <li class="dropdown"> <!-- dropdown Item -->
        <span>parent</span>
        <ul>
            <li><a href="#">Child</a></li>
            <li><a href="#">Child</a></li>
            <li><a href="#">Child</a></li>
        </ul>
    </li>
    <li><a href="#">Item</a></li>
</ul>
```


#### Progressbar

The progressbar is a visual representation of all sections within a document. It is created using JavaScript.

```
<div class="scrollspy-wrapper display-titles">
    <div class="scrollbar"></div>
</div>
```
There are two different version of the progressbar, a minimal one, without titles and one with titles displayed. (Refer to the [Sass Docs](https://getheinz.com/docsass.html) to see those in action.)

To toggle the title display all you do is add or remove `display-titles` from the wrapper classes.

The title that is displayed can be defined using a data-attribute within the section tag, or represents the first heading within the section.

```
<section data-section-title="Progressbar Title">
    <!-- Content -->
</section>
```

### Text Classes

We've baked some text styling for you. See them [here](https://getheinz.com/documentation.html#text) in action.

#### Headings

Headings are automatically styled and can be automatically numbered. To enable numbered headings all you do is add the `numbered` class to the parent. If you only want the headings within a specific section, add the class to the section, if you want the whole document to have numbered headings, add the class to the body tag.

```
<section class="numbered">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <h1>Heading 1</h1>
</section>
```

#### Paragraph Styles

For your running text:

- text-lead `<p class="text-lead"></p>`
- text-left `<p class="text-left"></p>`
- text-right `<p class="text-right"></p>`
- text center `<p class="text-center"></p>`
- text-justify `<p class="text-justify"></p>`
- text-hyphen `<p class="text-hyphen"></p>`
- text-no-hyphen `<p class="text-no-hyphen"></p>`
- text-small `<p class="text-small"></p>`
- text-muted `<p class="text-muted"></p>`
- text-highlighted `<p class="text-highlighted"></p>`

#### Blockquote

For using a blockquote, enter the following code. Fill in your text between `<blockquote>` and `<span>`. The source you can add into `<span></span>`.

```
<blockquote>
  "Have no fear of perfection,
  you'll never reach it"
    <span>Salvador Dali</span>
</blockquote>
```


### Image

There are four image formats defined. Check them out [here](https://getheinz.com/documentation.html#image).

Copy the code and paste it within a `<section>`. Add the source of your picture into `<img src="">`.

**Image content-width**
```
<figure class="content-wide">
    <img src="img/image.jpg" alt="image">
    <figcaption>
        Image Caption
    </figcaption>
</figure>
```

**Oversized image**

```
<figure class="oversized">
    <img src="img/image.jpg" alt="image">
    <figcaption>
        Image Caption
    </figcaption>
</figure>
```

**Oversized image with textoverlay**
```
<div class="oversized textoverlay">
    <img src="" alt="">
    <div class="overlay-content">This is overlay text</div>
</div>
```

**Full width image**
Copy the code and paste this into the `<main>`.

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
There are three kinds of video players. Two are normal players, one with content width and the other one oversized. The third one is a full-width option.

In our examples we work with YouTube Videos since they are the most common embedded video. If you want to use an HTML5 video, just replace the iframe with the video tag.

Videos need to be wrapped in 2 containers to ensure they scale responsively.

 **player content-width**
```
<div class="video-wrap">
    <div class="video">
        <iframe src="https://www.youtube.com/embed/YOUTUBEVIDEOID" frameborder="0" gesture="media" allowfullscreen></iframe>
    </div>
</div>
```

**player oversized**

Adding class `large` to the wrapper will make the player oversized.

```
<div class="video-wrap large">
    <div class="video">
        <iframe src="https://www.youtube.com/embed/YOUTUBEVIDEOID" frameborder="0" gesture="media" allowfullscreen></iframe>
    </div>
</div>
```

**background-video**

The third option is a display filling *background-video*. Autoplay, loop and muted are included via URL attributes from the YouTube API. There's an over-video container that darkens the video and adds a grid where you can put a textoverlay.

Be careful, for adding a background-video you need to create a new section. Close the preceding section, add the code for the full width video and start a new section for the following code.

```
<section class="full-width">
    <div class="video-wrap">
        <div class="video">
            <iframe src="https://www.youtube.com/embed/YOUTUBEVIDEOID?ecver=1&autoplay=1&mute=1&controls=0&loop=1&playlist=6gCd3VUOYWs&modestbranding=1"></iframe>
        </div>
    </div>
    <div class="over-video grid">
        <div class="item-span-8 item-offset-2">
            <h1 class="text-white">Text on top of the video</h1>
        </div>
    </div>
</section>
```


### Audio

For inserting audio files, copy the following html. Enter your audio source according to the file type into `<source src="">` and the type of your audio file into `type=""`. Unfortunately you can't customize the look of your audio via CSS, because it's not supported by browsers.

```
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support audio.
</audio>
```

### Slider

***This feature requires JavaScript***

We offer you fully prepared responsive sliders in two sizes. Content width and oversized. The Slider has images as background-image and also navigators in spans. Those are enabled automatically in js. Just copy the snippet into a `section` and enter the URL in `url(img/)` and `src="img/"` of your images.

**Slider content-width**

```
<div class="slider-wrap">
    <div class="slider">
        <div style="background-image: url(img/img1.jpg)"><img src="img/img1.jpg" alt="slide 1"></div>
        <div style="background-image: url(img/img2.jpg)"><img src="img/img2.jpg" alt="slide 2"></div>
        <div style="background-image: url(img/img3.jpg)"><img src="img/img3.jpg" alt="slide 3"></div>
    </div>
    <span class="navigator toggle-next">next</span>
    <span class="navigator toggle-prev">prev</span>
</div>
```

**Slider oversized**

Adding class `large` to the wrapper makes the slider bigger.
```
<div class="slider-wrap large">
    <div class="slider">
        <div style="background-image: url(img/img1.jpg)"><img src="img/img1.jpg" alt="slide 1"></div>
        <div style="background-image: url(img/img2.jpg)"><img src="img/img2.jpg" alt="slide 2"></div>
        <div style="background-image: url(img/img3.jpg)"><img src="img/img3.jpg" alt="slide 3"></div>
    </div>
    <span class="navigator toggle-next">next</span>
    <span class="navigator toggle-prev">prev</span>
</div>
```




### Sidestory
***This feature requires JavaScript***

You can add additional sidestories to your website. These are small boxes on the side of your container. We prepared one for the left side and one for the right side. By placing an overlay toggle in the box, an overlay opens where you can add your additional story. The background will be blurred then.

Sidestories require a separate section, the content needs to be placed within a content container and the sidestories either before or after the content. The placement of the sidestory box matters in the responsive view when the content will either be before or after the story.

The Overlay can be placed anywhere in the code, we recommend at the end of the document though.

To open an overlay, you need to use the class toggle and a data-attribute referencing the ID of the overlay.

```
<section class="has-sidestory">
    <div class="sidestory sidestory-left box">
        <p>this Sidestory is on the left side and does not open an overlay.</p>
    </div>
    <div class="content box">
        <p>Sidestory Content</p>
    </div>
    <div class="sidestory sidestory-right box">
        <h2>Sidestory</h2>
        <p>This Story is on the right, and it does open an overlay.</p>
        <br>
        <p class="text-center">
            <span class="toggle" data-toggle-overlay="overlay-1">Toggle Overlay</span>
        </p>
    </div>
</section>
```

For creating the content of the overlay you need the following code. Again, we like to place it at the end of our code. The Overlay can contain any of the components discussed.

```
<div class="overlay grid" id="overlay-1">
    <section>
        <span class="toggle close">x</span>
        <h1>Overlay Title</h1>
        <p>In this example we just added an image with content-wide. How you can add this picture you learn in chapter "Images"</p>
        <p>You can close this overlay by clicking the x, clicking outside of the content or hitting "Esc" on your keyboard.</p>

        <figure class="content-wide">
            <img src="img/mountains.jpg" alt="Image width of content">
            <figcaption>
                Image with content-width, <a href="https://unsplash.com/photos/gdE-5Oui1Y0"> source</a>
            </figcaption>
        </figure>
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
