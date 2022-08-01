---
title: Overview
description: ''
position: 1
category: Introduction
---

## Introduction
This document contains guidelines on how to write markdown files that will be displayed by two different type of applications:

* **Common markdown**
    * This section describes common markdown constructors. These constructors can be included on files that that are rendered by the MD2HTML or the NUXT application.

* **MD2HTML Application**
    * `Markdown to HTML` is an application that extracts a commit from a particular `Repository` and `branch`, and renders its content as a `PDF` and `HTML`. The App also provides a delta between two commits.
    * The advantage of this application is that there is no need to install any code in the GitHub reposiotry. The only requirement is to create one folder for each document and insert a file called [index.md](/md2html-setup#index), which contains simple instructions for the `MD2HTML` application on how to assembly the final document.
    * Some markdown constructors were customized for rendering special features, e.g. a markdown instruction that embeds an external file into the final document.

* **NUXT Application**
    * [https://nuxtjs.org/](https://nuxtjs.org/) is an open source platform that can be used to create websites, and render automatically documents stored in a GitHub repository.
    * This application requires to install the `Nuxt` code in the same respository as the content to render. The text to be rendered is stored in a particular folder inside of the repository.
    * This guidelines document is using this application. The content can be seen [here](https://github.com/jpradocueva/md2html_guidelines/tree/master/content/en).
