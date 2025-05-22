---
title: Paragraph
description: ''
position: 150
category: MD2HTML App
---

This section explains how to create and format `paragraphs` correctly in Markdown and HTML, especially for consistent rendering in `PDF` and `HTML` outputs.

✅ DOs

* Use the Enter key twice (i.e., leave one empty line) to create a new paragraph.
✍️  *In Markdown*:
```md
This is paragraph one.

This is paragraph two.
```
*Rendered output*:  

This is paragraph one.

This is paragraph two.

* Use the `<p>` tag only inside `HTML` tables to define a paragraph

❌ DON'Ts
* Don't use the `<p>` tag in normal Markdown body text. It is unnecessary and may result in inconsistent rendering.
* Don't separate paragraphs with a single line break only — it won't create a new paragraph.

## Blockquote
The `blockquote` is used to highlight quoted or emphasized text. They are especially useful for quoting specifications, references, or important notes.

✅ DOs
* Use the > character at the beginning of the line to create a blockquote in Markdown.

✍️ *Markdown Syntax*:

```md
> This is a blockquote text.
```
This is how a `blockquote` is displayed:
> This is a blockquote text.


## Inline Code
Use inline `code` formatting to highlight short code snippets, commands, file names, or technical terms within a sentence or paragraph.

✅ DOs
* Wrap the code with single backticks ( ` ) to format it as inline code.

✍️ *Markdown Syntax*:
```md
`code`
```
Rendered Output:

`code`

* Use inline code for:

  * File names like README.md

  * Variable names such as ObjectID

  * Command-line options like --help

❌ DON'Ts
* Don’t use triple backticks for inline code. That creates a multi-line code block instead.

* Don’t use inline code for large code samples or blocks of text.

* Don’t forget to escape backticks inside inline code when needed:

✍️ *In Markdown*:
```md
`` `example with \`backtick\`` ``
```

## Preformatted Text
Use `preformatted text` blocks to display code snippets or any text where spacing and line breaks must be preserved exactly as written.  

✅ DOs
* Wrap the block with triple backticks ( ``` ) to create a preformatted block.

✍️ *Markdown Syntax*:
````
```md
Text in this position
    other text dented to the right
  other text dented to the left

          other text
```
````
This is how `preformatted` text is displayed:

```
Text in this position
    other text dented to the right
  other text dented to the left

          other text
```
* Use preformatted text when:
  * You need to show text alignment or indentation.
  * Displaying configuration blocks, logs, or structured output.
  * Presenting non-highlighted technical content where layout matters.
* Use language identifiers (e.g., xml, json) when syntax highlighting is needed (see Code With Syntax Highlighting section).

❌ DON'Ts
* Don’t use triple backticks for short, inline text — use single backticks for that (see Inline Code)
* Don’t assume line wrapping will work automatically in PDF output. Long lines in `preformatted blocks` may be cut off or overflow.
* Don’t rely on `preformatted blocks` to align content precisely in tables or columns — use tables instead.

## Code With Syntax Highlighting
* Use `syntax highlighting` to format code blocks according to programming or markup languages (e.g., XML, JSON, Java). This improves readability and clarity for technical documents.

✅ DOs
* Add a language identifier immediately after the triple backticks to enable syntax highlighting.

✍️ *Markdown Syntax (example with XML)*:

````
```xml
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

Rendered Output:

```xml
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
For the list of keywords see https://highlightjs.org/ e.g. Java, JSON, XML. The text language should be indicated in order to enable this syntax highlighting functionality.
</alert>
❌ DON'Ts  

* Don’t forget to specify the language if you want syntax highlighting — without it, the block will be rendered as plain text.

* Don’t use this format for inline code. For short inline snippets, use single backticks (see Inline code)

<alert type='warning'>
Warning:
Syntax highlighting may be displayed differently after md is converted to HTML & PDF.
</alert>

## Line Breaks
* Use`line breaks` to start a `new line` without starting a new `paragraph`.

✅ DOs
* End a line with two or more spaces followed by pressing `Enter` or `(<br>)`, to create a `line break` or `new line`.
✍️ *Markdown/HTML Syntax:*
```md
Paragraph one.␣␣

Paragraph two.<br>
Another line immediately afterwards will be displayed starting on the same line as paragraph two.
```
*Displayed*:  

Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.

* Use line breaks inside a paragraph when:
  * You need controlled spacing.
  * You want new lines without creating a new paragraph block.

❌ DON'Ts
* Don’t use a backslash (\) to separate lines — it will not insert a break.
* Don’t leave lines immediately adjacent with no spacing or break — the text will flow on the same line.

✍️ *Example:*
```md
Paragraph one. <br>

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.
```
*This is how it is displayed*:

Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.

## Non-breaking Space
* Use a `non-breaking space` to prevent automatic line breaks between two words or elements.

✅ DOs
* Use `&nbsp;` where two words must always stay together.
```md
&nbsp;
```
✍️ *For example*:
```md
Resource&nbsp;Instance
```
*This is how it is rendered*:

Resource&nbsp;Instance

❌ DON'Ts
* Don’t use regular spaces when the layout requires words to remain unbroken across lines.
* Don’t overuse `non-breaking spaces` — only apply where needed (e.g., units, technical labels, inline UI elements).
