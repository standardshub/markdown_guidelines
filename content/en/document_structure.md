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

## Definitions & Abbreviations
The features described in this section are only available in MD2HTML v2.1.x. Prior versions are not able to present the information as described here.


* First step is to create a section on the markdown document to store `definitions` and `abbreviations`. We recommend to call this section `Terminology and Conventions`. 
* This new section should contain two subsections, `Definitions`, and `Abbreviations`.

### Definitions
* This is how a `definition` is defined on the markdown document:

```html
 <dl>
        <dt>Git</dt>
        <dd>Git is a distributed version control system that tracks changes in any set of text files.</dd>
 </dl>
```
Where:
    `<dl>` = definition list;
    `<dt>` = definition title;
    `<dd>` = definition description.

* This is how a `definition` is used in a section text.

```html
bla, bla, bla, 
<a>Git</a> is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
bla, bla, bla,
```

* This is how it is display in HTML and PDF document.



### Abbreviations
This is how an `abbreviation` is written on the markdown documents:

```html
 <dl>
        <dt>SH</dt>
        <dd>Standards Hub</dd>
 </dl>
```
Where:
    `<dl>` = definition list;
    `<dt>` = definition title;
    `<dd>` = definition description.

* This is how an `abbreviation` is used in a section text.

```html
bla, bla, bla, 
<abbr>SH</abbr> is a Service Management Association that provides Standards Organizations with an end-to-end service, from organization formation to publication of the organization outputs.
bla, bla, bla,
```

* This is how it is display in HTML and PDF document.

<alert>MD2HTML uses the same constructors `dl`, `dt`, `dd` to write a <i>definition</i> or an <i>abbreviation</i></alert>

## Horizontal Rule


This is how a `horizontal rule` is displayed:

---
This is how a `horizontal rule` is written in markdown:

```md
---
```