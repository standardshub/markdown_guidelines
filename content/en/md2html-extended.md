---
title: Extended Markdown
description: ''
position: 700
category: MD2HTML
---

## Document Structure
### Front Page
The document `index.md` contains the information displayed on first page of the document. See [Index.md](/md2html-setup#index) for further details.

### Legal Disclaimer
The legal disclaimer text is inserted, automatically by the md2html tool, inside of the TS document at the time of generating the HTML document.

> Note: OMA-License.txt file is added to the repository as a reference. The md2html tool uses its own License file.

### Header
The md2html tool automatically adds a header to generated PDFs

### Footer
The md2html tool automatically adds a header to generated PDFs


### Horizontal Rule


This is how a `horizontal rule` is displayed:

---
This is how a `horizontal rule` is written in markdown:

```md
---
```

### Indexes

* Table of Content
* Tabbe of Tables
* Table of Figures

This content doesn't exist in the markdown documents.
It is constructed automatically by the conversion tool and only appears in the HTML & PDF generated documents.

#### DO´s

* Choose unique titles for the sections, subsections, tables and figures
* Avoid using special characters in the titles. It makes difficult to establish links inside of the document to a particular section.
* Try to create titles for section, figures and tables that are short and without special characters

## Formatting

### Ignore Markdown Formatting

**DO's**

* To ignore markdown formatting insert a  backslash `\` character before the markdown character e.g.

```md
\[RFC6655\]
```

\[RFC6655\]

### Page Break

**DO's**

* To introduce a page break insert:

```md
{:page-break}
```

* Only use at the start of a line.
* Use where markdown is expected.
* Ensure `{:page-break}` is followed by a blank line

**DON'Ts**

* Don't use in an HTML construct e.g. between a `<table>` tag and its corresponding end tag.

### Constructors Involving Formatting

**DON'Ts**

* Formatting instructions should be done using CSS and NOT md or html
* No style should be introduced on any of the HTML constructors

## Headings
### Section Numbers
* Section numbers don't exist in the markdown version of the documents

### Appendixes

#### DOs
* The highest section title level starts with two #s, i.e. `##` (level 1)
* Subsequent subsections after inserting an appendix title will be labelled with the appendix letter prefix by default:


        ## Appendix title
        ### Subsection heading title


* It is recommend to use section titles up to `#####` (level 4), with an upper limit of `######` (level 5)

#### DON'Ts

* DON'T use only 1 `#`, section level 1 starts with two `##`
* DON'T use more than `######` i.e. level 5 (as level 6 and above will not be rendered in PDF and are not allowed)
* DON'T duplicate any of the section, figures or tables titles
    * This will create problems with any reference links due to the duplications
* DON'T add a section, figure or table numbers manually

## Paragraph
### Paragraph

**DO's**

* Use the "Enter" key to separate two paragraphs.

**DON'Ts**

* Do not use `<p>` tag in normal body text

### Preformated Text

**DO's**

* Use (```) to indicate the beginning and end of preformatted text block
    * Add the markup name on the first, e.g. (```xml)
* Use (```) with caution. Line breaks are not automatically inserted so in PDF text may not be fully displayed

```md
Text in this position
    other text dented to the right
  other text dented to the left

          other text
```

### Code With Syntax Highlighing

**DO´s**

Use e.g. (```XML) to displayed XML.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<LWM2M xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" 
       xsi:noNamespaceSchemaLocation=
           "http://openmobilealliance.org/tech/profiles/LWM2M.xsd" >
                <Object ObjectType="MODefinition">
                                <Name>MyDevice</Name>
                                <ObjectID>44</ObjectID>
                                <LWM2MVersion>1.1</LWM2MVersion>
               </Object>
</LWM2M>
```


<alert>
For the list of keywords see https://highlightjs.org/ e.g. Java, JSON, XML
The text language should be indicated in order to enable this syntax highlighting functionality.
</alert>

<alert type='warning'>
Warning:
Syntax highlighting may be displayed differently after md is converted to HTML & PDF.
</alert>

###  Line Breaks

**DO's**

* Paragraph one with some text.
* Another line immediately afterwards will be displayed starting
on the same line as paragraph two.

```md
Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.
```
This is how it is displayed:

Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.

### Block Quote

**DO's**

* To indent and mark text use:

```md
> OMA LwM2M
```

> OMA LwM2M

### Non-breaking Space

**DO's**

* To insert a non-breaking space use:

```md
&nbsp;
```

For example:

```md
Resource&nbsp;Instance
```

Resource&nbsp;Instance

## Figures

Figures MUST be referenced using HTML

* Images need to be uploaded to the `images` folder.
* In a GitHub repository, each technical document should have its own "images" folder.
* The location of the figure is controlled by the src parameter
* See Creation of `.svg` Images
    * Please follow these guidelines when creating a new image from scratch
* The code to insert inside of the document to represent an image follows:


        <figure>
            <img src="images/image-name.svg" alt="Figure-Title">
            <figcaption>Figure-Title</figcaption>
        </figure>


<alert>Depending on the line thickness in figures, upon the SVG scaling factor and the browser zoom setting some lines may not be displayed when viewed from GitHub. 
This can be mitigated by increasing the browser zoom setting. </alert>

**DO's**

* Use HTML constructor as listed here
* Use the same title as a value for `<figcaption>` and `alt` elements
    * The `alt` value will show the title of the figure in case the figure is not displayed correctly
* Ensure contiguous text in a line is in a single text box and not multiple text boxes. 
* If multiple text boxes are used then when the figures are converted to PDF the figures may appear incorrect.

**DON'Ts**

* DON'T use markdown constructors to insert a `figure`
* DON'T use parameters to centre or define the `width` and `height` of the `figure`. The md2html tool will apply a predefined CSS that contains all the necessary style to ensure the best possible PDF quality
* DON'T insert a link inside in the `Figure-Title` inside of the `<figcaption>` element. The link won't work.

## HTML Tables

**DO´s**

Tables MUST be constructed in HTML only:

```html
<table class="max-width-50">
  <caption>Table Title</caption>
  <thead>
    <tr class="height-20">
        <th class="width-10">Header 1</th>
        <th>Header 2</th><th>Header3</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Cell 1-1</td> <td>Cell 1-2</td> 
        <td>Cell 1-3</td>
    </tr>
    <tr>
        <td colspan="2">Cell 3-1 & 3-2</td> 
        <td>Cell 3-3</td>
    </tr>
    <tr>
        <td>Cell 4-1</td> 
        <td rowspan="2">Cell 4-2 & 5-2</td> 
        <td>Cell 4-3</td>
    </tr>
    <tr>
        <td>Cell 5-1</td> 
        <td>Cell 5-2</td>
    </tr>
</tbody>
</table>
```

* Use `<caption>` to provide table title or name
* Use `<thead>` to define the title of the columns
* Use `<rowspan>` to merge cells on the same column among different raws
* Use `<colspan>` to merge cells on the same raw among different columns
* Use `<class="xxx">` to indicate the width of each column

* Should the text in a table need to be formatted (e.g. strong, or emphasis) then use the appropriate HTML tags e.g.

### HTML Text
#### Deleted text

```html
<del>...</del>
```
#### Emphasised text

```html
<em>...</em>
```
#### Marked/highlighted text

```html
<mark>...</mark>
```

#### Important text

```html
<strong>...</strong>
```

#### References
* e.g. for sections within the document the text must match heading

```html
<a href="">Identifiers</a>
```

#### Single Line Break	

```html
<br>
```

#### Small text	

```html
<small>...</small>
```


#### Subscripted Text

```html
<sub>...</sub>
```

#### Superscripted Text

```html
<sup>...</sup>
```

### HTML Lists

#### Ordered List

* type="1" - numbers (default)
* type="A" - uppercase letters
* type="a" - lowercase letters
* type="I" - uppercase roman numbers
* type="i" - lowercase roman numbers

```html
<ol type="a">
    <li>Requirements Document</li>
    <li>Core TS</li>
    <li>Transport TS</li>
</ol>
```

#### Unordered List

```html
<ul>
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ul>
```

**DON'Ts**

* DON'T use markdown tables

#### Nested List
[TBD]

## Links to

### Section

**DO's**

For links to sections and subsections from the body of the text use:

    [Section Title]()


* The square brackets enclose the section title, immediately followed by empty round brackets e.g.

    [Device Management & Service Enablement Interface]()


* The text between the square brackets must exactly match the text of the section/subsection title
* The links will not work properly in GitHub & markdown; however, the links should function when HTML generated by the md2html tool is viewed in a browser

**DON'Ts**

* Don't include the section/subsection number
* Don't include the word Appendix for links to the appendices
* Don't use this construct for links to a section or subsection within an HTML table
* Don't use symbols such as "<" or ">", instead use: `"&lt;"` or `"&gt;"`. For example:

    * `&lt;PROPERTIES&gt;` to represent `<PROPERTIES>`

### Section From Within a Table

**DOs**

* For links to sections and subsections from within HTML table use the HTML anchor tag:

```html
<a href="">Section Title</a>
```

For example:

<a href="">Section Title</a>

* The text must exactly match the text of the section/subsection title

**DON'Ts**

* Don't include the section/subsection number
* Don't include the word Appendix for links to the appendices
* Don't use this construct for links to a section or subsection in the body of the text
* The links will not work properly in GitHub & markdown; however, the links should function when HTML generated by the md2html tool is viewed in a browser

### Figure

**DOs**

* For links to figures from the body of the text use:

```md
[Figure Figure-Title]()
```

* Prefix the word Figure to the Figure-Title
* Figure-Title = title contained in <figcaption>

* The square brackets enclose the text "Figure" followed by the title; then there are empty round brackets e.g.

```md
[Figure The protocol stack of the LwM2M Enabler]()
```

* The Figure-Title text between the square brackets must exactly match the text of the figure title

**DON'Ts**
* Don't include the figure identifier number
* Don't use this construct for links to a figure within an HTML table
* The links will not work properly in GitHub & markdown; however, the links should function when HTML generated by the md2html tool is viewed in a browser
* Don't use the word `figure` outside of the parenthesis. Otherwise, the word `figure` will appear duplicated.

For example:

```md
~~figure~~[Figure The protocol stack of the LwM2M Enabler]()
```

~~figure~~[Figure The protocol stack of the LwM2M Enabler]()

### Figure From Within a Table

**DOs**

* For links to figures from within an HTML table use the HTML anchor tag:

For example:

```html
<a href="">Figure Figure-Title</a>
```

* Prefix the word Figure to the Figure-Title
* Figure-Title is the text enclosed by `<figcaption>` tags

For example:

```html
<a href="">Figure Client Registration Interface example flows</a>
```

* The Figure-Title text must exactly match the text of the figure title

**DON'Ts**

* Don't include the section/subsection number
* Don't use this construct for links to a figure in the body of the text
* The links will not work properly in GitHub & markdown; however, the links should function when HTML generated by the md2html tool is viewed in a browser
* Make sure that the word `figure` is not duplicated by adding it inside and outside of the anchor.


### Table

**DO's**

* For links to a table from the body of the text use:

```md
[Table-Title]()
```

* Prefix the word Table
* Table-Title is the text enclosed by `<caption>` tags


* The square brackets enclose the text `Table` followed by the Table-Title; then there are empty round brackets e.g.:

```md
[Table Operation to Method and URI Mapping (Registration Interface)]()
```

* The title text between the square brackets must exactly match the text of the table title

**DON'Ts**

* Don't include the table identifier number
* Don't use this construct for links to a table within an HTML table
* The links will not work properly in GitHub & markdown; however, the links should function when HTML generated by the md2html tool is viewed in a browser
* The title of the table will contain the word "Table", make sure it is not duplicated that word.

### Table From Within Another Table

**DO's**

* For links to tables from within other HTML tables use the HTML anchor tag:

```html
<a href="">Table Table-Title</a>
```

* Prefix the world Table in front of Table-Title
* Table-Title is the text enclosed between the `<caption>` tags

For example:

```html
<a href="">Table Object Version usage rules</a>
```

* The Table-Title text must exactly match the text of the table title

**DON'Ts**

* Don't include the table identifier
* Don't use this construct for links to a table from the body of the text
* The links will not work properly in GitHub & markdown; however, the links should function when HTML generated by the md2html tool is viewed in a browser
* The title already contains the word "Table" there is no need to duplicate it outside of the anchor.

### Further Links

**DO´s**

Additional link styles include:

```md
[I'm an inline-style link](https://www.omaspecworks.org/)
```

or

```md
[I'm an inline-style link with a title](https://www.omaspecworks.org/ "OMA Homepage")
```


* URLs and URLs in angle brackets will automatically be converted to links e.g.

https://www.omaspecworks.org/



### Further Links From Within a Table

**DO's**

* For additional link styles from within HTML tables use the HTML anchor tag:

```html
<a href="http://www.openmobilealliance.org/">URL:http://www.openmobilealliance.org/</a>
```
## XML Files
### :supp
**File Name: "OMA-SUP-XML_LWM2M_Access_Control-V1_Z.xml"**

    {:supp Repository_Name/[Branch_Name] [Folder_Name]/File_Name.xml}

* This constructor inserts an XML file inside of an HTML document as a table:

**Examples:**

    {:supp Repository_Name/[Branch_Name] [Folder_Name]/File_Name.xml}

Example of `development` branch:

    {:supp LwM2M-Objects/development Device/OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml}

* Inserts the latest revision of LwM2M Device v1.0.Z Object inside of the HTML document. The Object file is stored in the LwM2M-Object repository, in the "development" branch and inside of a folder called "Device".

Example of `master` branch:

    {:supp LwM2M-Objects/ Device/OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml}

* Inserts the latest revision of LwM2M Device v1.0.Z Object inside of the HTML document. The Object file is stored in the LwM2M-Object repository, in the "master" branch (which is omitted) and inside of a folder called "Device".

### :supp1
**File Name without Object Version**

* File Name: "LWM2M_Access_Control.xml"


        {:supp1 Repository_Name/[Branch_Name | Release] File_Name.xml}

Examples:

        {:supp1 objects-lwm2m/dev LWM2M_Access_Control.xml}

* repository: "objects-lwm2m"
* branch: `dev`
* File Name: "LWM2M_Access_Control.xml"

        {:supp1 objects-lwm2m/v1_1 LWM2M_Access_Control.xml}

    * repository: "objects-lwm2m"
    * release: `v1_1`
    * File Name: "LWM2M_Access_Control.xml"

### :supp3
**Insert content from any file type (.xml; .xsd; .html; etc)**

    {:supp3 [repository]/[branch/tag] [with folder |without folder]/[filename.extension]}

**Examples:**

**Option A - with folder**

In this case the schema inserted is located in:
* Repository: "Test_LwM2M_v1_1"
* Branch: `schema`
* Folder: "SUP"
* File name: "OMA-SUP-XML_LWM2M.xsd"

        {:supp3 Test_LwM2M_v1_1/schema SUP/OMA-SUP-XML_LWM2M.xsd}

**Option B - without folder**

In this case the schema inserted is located in:
* Repository: "Test_LwM2M_v1_1"
* Branch: `schema`
* Folder: none (file at the root)
* File name: LWM2M.xsd

        {:supp3 Test_LwM2M_v1_1/schema LWM2M.xsd}

**Option C - with folder**

In this case the schema inserted is located in:
* Repository: "LwM2M"
* Branch: `master`
* Folder: "SUP"
* File name: OMA-SUP-XML_LWM2M.xsd

        {:supp3 LwM2M/master SUP/OMA-SUP-XML_LWM2M.xsd}

**C.1 now omitting the name of the branch "master"**

        {:supp3 LwM2M/ SUP/OMA-SUP-XML_LWM2M.xsd}

**Option D - in a tag, with folder**

In this case the schema inserted is located in:

* Repository: "LwM2M"
* Branch: `v1_1-20180710-A` (this is a release tag)
* Folder: "SUP"
* File name: OMA-SUP-XML_LWM2M.xsd

        {:supp3 LwM2M/v1_1-20180710-A SUP/OMA-SUP-XML_LWM2M.xsd}