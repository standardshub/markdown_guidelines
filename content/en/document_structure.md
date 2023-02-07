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
In this version, the legal disclaimer text is inserted automatically by the md2html tool inside the TS document when generating the HTML document.

<alert> OMA-License.txt file is added to the repository as a reference. The MD2HTML tool uses its License file.</alert>

### MD2HTML v2.x
In this version of the tool==, the license document is added to the list of files. See [Setup Index File](/md2html-setup) for further details. 

## Header
The MD2HTML tool automatically adds a header to generated PDFs.

## Footer
The MD2HTML tool automatically adds a footer to generated PDFs.

## Indexes

* Table of Content
* Table of Tables
* Table of Figures

This content doesn't exist in the markdown documents.
It is constructed automatically by the conversion tool, and only appears in the HTML & PDF generated documents.

* Choose unique titles for the sections, subsections, tables, and figures.
* Avoid using special characters in the titles. It makes it difficult to establish links inside of the document to a particular section.
* Try to create titles for sections, figures, and tables that are short and without special characters.

## Definitions & Abbreviations
The features described in this section are only available in MD2HTML v2.1.x. Previous versions cannot render `definitions` and `descriptions` as presented here.


* First step is to create a section on the markdown document to store `definitions` and `abbreviations`. We recommend calling this section `Terminology and Conventions`. 
* This new section should contain two subsections, `Definitions` and `Abbreviations`.

### Definitions
* This is how a `definition` is defined on the markdown document:

```html
 <dl>
        <dt>Git</dt>
        <dd>Git is a distributed version control system that tracks changes in any set of text files.</dd>
        <dt>Firewall</dt>
        <dd>In computing, a firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.</dd>
 </dl>
```
Where:
    `<dl>` = definition list;
    `<dt>` = definition title;
    `<dd>` = definition description.

* This is how `definitions` are displayed in `html`:
![image](https://user-images.githubusercontent.com/3258579/217130743-c9e4d070-f15d-4d5c-ab2f-f1452d94847b.png)

* This is how a `definition` is used in a section text.

```html
bla, bla, bla, 
<a>Git</a> is a free and open-source distributed version control system designed to handle everything from small to very large projects quickly and efficiently.
bla, bla, bla. 
Network security is monitored by <a title= "firewall">firewalls</a> which control ...
```

* This is how a `definition` is displayed in HTML and PDF documents.

![image](https://user-images.githubusercontent.com/3258579/217131695-5f364607-2a04-47bd-a538-d223b2be895e.png)


### Abbreviations
This is how an `abbreviation` is written on the markdown documents:

```html
 <dl>
        <dt>SH</dt>
        <dd>Standards Hub</dd>
        <dt>TS</dt>
        <dd>Technical Specification</dd>
        <dt>AD</dt>
        <dd>Architecture Document</dd>

 </dl>
```
Where:
    `<dl>` = definition list;
    `<dt>` = definition title;
    `<dd>` = definition description.
* This is how an `abbreviation` section is displayed in `HTML` or `PDF`.

![image](https://user-images.githubusercontent.com/3258579/217131385-39e56ee7-6a22-411f-a863-436eacc73282.png)

* This is how an `abbreviation` is used in a section text.

```html
bla, bla, bla, 
bla, bla, <abbr>SH</abbr> is a Service Management Association that provides Standards Organizations with an end-to-end service, from organization formation to publication of the organization outputs.
such as <abbr title= "TS">TS's</abbr> and <abbr title= "AD">AD's</abbr>
```

* This is how an `abbreviation` is displayed in `HTML` and `PDF` document.

![image](https://user-images.githubusercontent.com/3258579/217131339-f6f4be08-4319-41af-bbc9-f6da5970a248.png)

<alert>MD2HTML uses the same constructors `dl`, `dt`, `dd` to write a <i>definition</i> or an <i>abbreviation</i></alert>

## Horizontal Rule


This is how a `horizontal rule` is displayed:

---
This is how a `horizontal rule` is written in markdown:

```md
---
```