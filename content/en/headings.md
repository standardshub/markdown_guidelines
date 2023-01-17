---
title: Headings
description: ''
position: 130
category: Constructors
---

## Introduction

## Titles
This is how a `title` is displayed:
![image](https://user-images.githubusercontent.com/3258579/124534360-f6dfec80-ddc8-11eb-8735-db82b5d5cb41.png)

This is how a `title` is written at each level:

```md
## Title Level 1
### Title Level 2
#### Title Level 3
##### Title Level 4
###### Title Level 5
```
* In the [MD2HTML](https://markdown.standardshub.io/md2html-overview) application, the `level 1` headers contains two `#`, `##`.
* In the index page, the [MD2HTML](https://markdown.standardshub.io/md2html-overview) app only displays titles from `level 1` to `Level 5`.

## Section Numbers
* Section numbers don't exist in the markdown version of the documents

## Appendixes

### DOs
* The highest section title level starts with two #s, i.e. `##` (level 1)
* Subsequent subsections after inserting an appendix title will be labelled with the appendix letter prefix by default:


        ## Appendix title
        ### Subsection heading title


* It is recommend to use section titles up to `#####` (level 4), with an upper limit of `######` (level 5)

### DON'Ts

* DON'T use only 1 `#`, section level 1 starts with two `##`
* DON'T use more than `######` i.e. level 5 (as level 6 and above will not be rendered in PDF and are not allowed)
* DON'T duplicate any of the section, figures or tables titles
    * This will create problems with any reference links due to the duplications
* DON'T add a section, figure or table numbers manually