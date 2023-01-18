---
title: Paragraph
description: ''
position: 150
category: MD2HTML App
---
## Paragraph

**DO's**
* Use the "Enter" key to separate two paragraphs.
* Inside of a HTML table use the element `<p>` text, text `</p>`.
**DON'Ts**
* Do not use `<p>` tag in normal body text unless the paragraph is inside of a table (see above).

## Blockquote

This is how a `blockquote` is displayed:

> This is a blockquote text.

This is how a `blockquote` is written in markdown:

```md
> This is a blockquote text.
```
## Code
This is how `code` is displayed:
`code`

This is how `code` is written in markdown:
```md
`code`
```

## Preformatted Text

* Use (```) to indicate the beginning and end of preformatted text block.
* Use (```) with caution. Line breaks are not automatically inserted so in PDF text may not be fully displayed.

This is how `preformatted text` is displayed:

```
Text in this position
    other text dented to the right
  other text dented to the left

          other text
```

Preformatted text written in markdown:

````
```md
Text in this position
    other text dented to the right
  other text dented to the left
```
````

## Code With Syntax Highlighting


To add syntax highlighting, specify a code type next to the backticks <code>(```)</code> before the fenced code block.

Displayed e.g. XML code block:

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
This is how XML code block is written in markdown:

````
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
````

<alert>
For the list of keywords see https://highlightjs.org/ e.g. Java, JSON, XML. The text language should be indicated in order to enable this syntax highlighting functionality.
</alert>

<alert type='warning'>
Warning:
Syntax highlighting may be displayed differently after md is converted to HTML & PDF.
</alert>

## Line Breaks

**DO's**  
* Paragraph one with two spaces after.  
  Paragraph two.

* Paragraph one with the HTML tag after.`<br>`  
  Paragraph two. 

**DON'Ts**  
* Paragraph one with a backslash after. `\`  
  Paragraph two.

* Paragraph one with nothing after.  
  Paragraph two.

Example:
```md
Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.
```
This is how it is displayed:

Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.

## Non-breaking Space

* To insert a non-breaking space use:

```md
&nbsp;
```

For example:

```md
Resource&nbsp;Instance
```

Resource&nbsp;Instance
