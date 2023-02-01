---
title: Document Structure
description: ''
position: 110
category: MD2HTML App
---

This section describes the markdown constructors that define the document's structure.

## Front Page
The document `index.md` or `index.yaml` contain the information displayed on the document's first page. In version MD2HTML v2.0, these properties are extended. See [Setup Index File](/md2html-setup) for further details.

## Legal Disclaimer
### MD2HTML v1.x
In this version of the tool, the legal disclaimer text is inserted automatically by the md2html tool, inside of the TS document at the time of generating the HTML document.

<alert> OMA-License.txt file is added to the repository as a reference. The MD2HTML tool uses its own License file.</alert>

### MD2HTML v2.x
In this version of the tool, the license document is added to the list of files. See [Setup Index File](/md2html-setup) for further details. 

## Header
The MD2HTML tool automatically adds a header to generated PDFs.

## Footer
The MD2HTML tool automatically adds a footer to generated PDFs.

## Indexes

* Table of Content
* Tabbe of Tables
* Table of Figures

This content doesn't exist in the markdown documents.
It is constructed automatically by the conversion tool, and only appears in the HTML & PDF generated documents.

* Choose unique titles for the sections, subsections, tables and figures.
* Avoid using special characters in the titles. It makes difficult to establish links inside of the document to a particular section.
* Try to create titles for section, figures and tables that are short and without special characters.


## Horizontal Rule


This is how a `horizontal rule` is displayed:

---
This is how a `horizontal rule` is written in markdown:

```md
---
```