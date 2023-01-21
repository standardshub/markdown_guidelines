---
title: Images
description: ''
position: 190
category: MD2HTML App
---


## Image in Markdown
This is how an `image` is displayed:

![alt text](https://www.markdownguide.org/assets/images/tux.png)

This is how an `image` is written in markdown:

```md
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```
or
```md
![image](https://user-images.githubusercontent.com/3258579/124534970-30fdbe00-ddca-11eb-8a95-ca7dd82eba41.png)

```
In addition of using this markdown constructor, is also possible to use a HTML constuctor [`<figure>`](md2html-extended#figures). This constructor, allows to integrate the image in the `Table of Figures` as described in [`Index`](md2html-extended#indexes) and applying the same `Cascade Style Sheets` across all the figures. See next section for further details.

## Extended Images

Figures MUST be referenced using HTML

* Images need to be uploaded to the `images` folder.
* In a GitHub repository, each technical document should have its own "images" folder.
* The location of the figure is controlled by the src parameter.
* See Creation of `.svg` Images
    * Please follow these [`guidelines`](https://docs.google.com/document/d/194oEy2GrUdLafICeKUxPVH8zX9okZd_D/edit?usp=sharing&ouid=112978134087833973902&rtpof=true&sd=true) when creating a new image from scratch.
* The code to insert inside of the document to represent an image follows:


        <figure>
            <img src="images/image-name.svg" alt="Figure-Title">
            <figcaption>Figure-Title</figcaption>
        </figure>


<alert>Depending on the line thickness in figures, upon the SVG scaling factor and the browser zoom setting some lines may not be displayed when viewed from GitHub. 
This can be mitigated by increasing the browser zoom setting. </alert>

### DO's

* Use HTML constructor as listed here.
* Use the same title as a value for `<figcaption>` and `alt` elements.
    * The `alt` value will show the title of the figure in case the figure is not displayed correctly.
* Ensure contiguous text in a line is in a single text box and not multiple text boxes. 
* If multiple text boxes are used then when the figures are converted to PDF the figures may appear incorrect.

### DON'Ts

* DON'T use markdown constructors to insert a `figure`
* DON'T use parameters to centre or define the `width` and `height` of the `figure`. The md2html tool will apply a predefined CSS that contains all the necessary style to ensure the best possible PDF quality
* DON'T insert a link inside of the `<figcaption>` element (`Figure-Title`) as the link won't work.
