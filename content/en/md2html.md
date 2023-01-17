---
title: MD2HTML
description: ''
position: 20
category: Introduction
---
## Introduction

The application [MD2HTML](http://104.237.129.77/#/) was created by [standardshub.io/](https://www.standardshub.io/) to convert markdown documents, stored in GitHub repositories, into `.PDF` and `.HTML` documents. 

### MD2HTML Home Page
![image](https://user-images.githubusercontent.com/3258579/182972116-bf2f0ef9-d954-4265-baa8-e17505a59610.png)

### Documents 
The documents listed below were created from a particular commit.

![image](https://user-images.githubusercontent.com/3258579/182972373-928e679d-9713-4fb6-813d-4af10d2964cd.png)

### Free MD2HTML Version

Standards Hub is working on the creation of a free version the of [MD2HTML](http://104.237.129.77/#/) app that can be used to assemble markdown documents into `.PDF` and `.HTML` formats. If you are interested in using this tool please contact us [here](https://www.standardshub.io/).

In the next section, [Setup](/md2html-setup#index) you will find how to configure the `index.md` file that is used to assemble the markdown documents stored inside a particular folder.

The section after, [Extended M2DHTML Syntax](/md2html-extended) contains a list of the markdown constructors used to create documents that will be displayed by the [MD2HTML](http://104.237.129.77/#/) Tool.

## Setup
### Index.md

This file `index.md` MUST exist inside of the folder for each Technical  document. 

<img width="645" alt="image" src="https://user-images.githubusercontent.com/3258579/182251495-78ce12dd-a36b-4e5c-8684-6c34cfc83c6f.png">

Example of content inside of a `index.md`


        ---
        title: "Lightweight Machine to Machine Technical Specification: Core"
        status: "Approved"
        version: "1.2"
        date: "2020-11-10"
        documentName: "OMA-TS-LightweightM2M_Core-V1_2-20201110-A"
        files:
        - OMA-TS-LightweightM2M_Core.md
        - Appendix_A.md
        - Appendix_B.md
        - Appendix_C.md
        - Appendix_D.md
        - Appendix_E.md
        - Appendix_F.md
        - Appendix_G.md
        - Appendix_H.md
        - Appendix_I.md
        - Appendix_J.md
        - Appendix_K.md
        - Appendix_L.md
        - Appendix_M.md
        ---

* `title`
    * Title of the document, as displayed on the front page
* `status`
    * Document status, e.g., `Draft`, `Candidate`, `Approved`
* `version`
    * Document version, e.g., `V1.0.3`
* `date`
    * In format `YYYY-MM-DD`
* `documentName`
    * File name without extension format. See example above
* `files`
    * This property, list all the names of the markdown documents to display in the order in which should appear on the final document
