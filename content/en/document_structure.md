---
title: Document Structure
description: ''
position: 110
category: MD2HTML App
---

This section describes the Markdown constructors that define the document's structure.

## Front Page
The `index.md` or `index.yaml` contains the metadata displayed on the document's first page. Starting with MD2HTML v2.0, these properties have been extended.  
See [Setup Index File](/md2html-setup) for further details.


## Legal Disclaimer
### MD2HTML v1.x
In version 1.x, the legal disclaimer text is inserted automatically by the MD2HTML tool inside the TS document when generating the HTML document.

<alert> OMA-License.txt file is added to the repository as a reference. The MD2HTML tool uses its License file.</alert>


### MD2HTML v2.x

In version 2.x, the license document is added to the list of files.  
See [Setup Index File](/md2html-setup) for more information. 

## Header
The MD2HTML tool automatically adds a header to generated PDFs.

## Footer
The MD2HTML tool automatically adds a footer to generated PDFs.

## Indexes

* Table of Content
* Table of Tables
* Table of Figures

These indexes are not included in the Markdown source files.
It is constructed automatically by the conversion tool, and only visible in the HTML & PDF generated documents.

Recommendations:  
* Choose unique titles for the sections, subsections, tables, and figures.
* Avoid special characters in titles to improve internal linking reliability.
* Keep titles short and clear, avoiding unnecessary punctuation.


## Scope
The `Scope` section defines the purpose, boundaries, and intended use of the document. It provides a clear statement about what the document covers and, if applicable, what it does not cover.
* Clearly state the objective of the document.
* Identify the target audience.
* If applicable, briefly list the topics excluded from the document’s scope.
* Avoid detailed technical descriptions — those belong in later sections.

## References
The References section must include both `Normative` and `Informative` references, each in its own subsection. Each subsection should contain a reference table using HTML constructors to ensure proper formatting in the final output (HTML or PDF).

### Normative References
Normative references are mandatory sources that define requirements or standards used in the document.

### Informative References
Informative references provide additional context or background but are not required to implement the specification.

✍️ *Use the same HTML structure for both `Informative` and `Normative` References, as in the example*:

```html
<dl data-caption="Informative Reference" data-term-column-title="Reference" data-description-column-title="Details">
    <dt>[OMADICT]</dt>
    <dd>"Dictionary for OMA Specifications", Open Mobile Alliance™, OMA-ORG-Dictionary-V2_9, URL:http://www.openmobilealliance.org/</dd>
</dl>
```
*Displayed*:
![image](https://github.com/user-attachments/assets/78de3231-0afb-413e-b003-276069142aa3)

✅ DOs
* Use `dl`, `dt`, and `dd` HTML tags to define reference lists.
* Use square brackets for reference IDs, e.g., [ABC].
* Include full citation details: `title`, `author(s)`, `date`, and `URL`.
* Separate Normative and Informative references into different sections.

❌ DON'Ts
* Don’t use Markdown lists or tables for references.
* Don’t use inline Markdown links.

## Terminology and Conventions
### Conventions
The features in this section are available in MD2HTML v2.1.x and later.
Earlier versions do not support `definitions` and `abbreviations` as described here.

* Add a section titled `Terminology and Conventions` to store `definitions` and `abbreviations`.
* This new section should contain two subsections:
  * `Definitions` and
  * `Abbreviations`

### Definitions
✍️ *Here is how to define a list of `definitions` in a Markdown file using HTML syntax*:

```html

 <dl data-caption="Definitions" data-term-column-title="Term" data-description-column-title="Description">
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

*This is how a `definition` section is displayed on `HTML` or `PDF`*:

<figure>
<embed style="width: 100%" src="images/definition-table-example.png" alt="Definitions">
    <figcaption></figcaption>
</figure>

✍️ *In HTML, this is how a singular or plural `definition` terms are used in a section text*:

```html
bla, bla, bla, 
<a>Git</a> is a free and open-source distributed version control system designed to handle everything from small to very large projects quickly and efficiently.
bla, bla, bla. 
Network security is monitored by <a title= "firewall">firewalls</a> which control ...
```
* To use a `definition` in singular, insert the `definition` term inside of the anchor `<a>`, e.g., `<a>firewall</a>`.
* To use a `definition` term in plural, insert the `title` property inside of the anchor element, and the plural inside of the anchor `<a>`, e.g. `<a title= "firewall">firewalls</a>`.
* When positioning a `mouse pointer` over the `definition` word, a `tooltip` is displayed with the `definition` in singular and a click on the word will render the page on the `definition` term.

*This is how a `definition` term is displayed on `HTML` and `PDF` documents*.

![image](https://user-images.githubusercontent.com/3258579/217131695-5f364607-2a04-47bd-a538-d223b2be895e.png)

### Abbreviations
✍️ *Here is how to define a list of `abbreviations` in HTML*:

```html
 <dl data-caption="Abbreviations" data-term-column-title="Term" data-description-column-title="Description">
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

*This is how an `abbreviation` section is displayed on `HTML` or `PDF`*.

<figure>
<embed style="width: 100%" src="images/abbreviation-table-example.png" alt="Abbrevations">
    <figcaption></figcaption>
</figure>

✍️ *This is how a singular and plural `abbreviation` terms are used in a section text*.

```html
bla, bla, bla, 
bla, bla, <abbr>SH</abbr> is a Service Management Association that provides Standards Organizations with an end-to-end service, from organization formation to publication of the organization outputs.
such as <abbr title= "TS">TS's</abbr> and <abbr title= "AD">AD's</abbr>
```
* To use an `abbreviation` term in singular, insert the `abbreviation_word` inside of the element, e.g. `<abbr>TS</abbr>`.
* To use an `abbreviation` term in plural, insert the `title` property with a singular value and the plural value inside of the `<anchor>`, e.g. `<abbr title= "TS">TS's</abbr>`.
* When positioning a `mouse pointer` over the `abbreviation` word, a `tooltip` is displayed with the `abbreviation` expanded.

*This is how an `abbreviation` term is displayed on `HTML` and `PDF` document*.

![image](https://user-images.githubusercontent.com/3258579/217131339-f6f4be08-4319-41af-bbc9-f6da5970a248.png)

<alert>MD2HTML uses the same constructors `dl`, `dt`, `dd` to write a <i>definition</i> or an <i>abbreviation.</i></alert>

## Introduction

The Introduction should provide a clear and concise overview of the specification, outlining its purpose, scope, and relevance. It sets the context for the reader by explaining what the document covers, the motivation behind it, and the problem it aims to solve—without diving into technical implementation details.

✅ DOs
* Start with a brief summary of the problem or requirement the specification aims to address.
* Mention the purpose and scope of the document.
* Highlight any key concepts or functionality covered, keeping the language neutral, formal, and concise.

❌ DON'Ts
* Don’t include detailed technical explanations (save that for later sections).
* Don’t repeat content from other sections verbatim.
* Don’t assume prior knowledge of internal frameworks or acronyms without context.

