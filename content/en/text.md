---
title: Text
description: ''
position: 140
category: MD2HTML App
---

This section explains how to apply text formatting using both `Markdown` and `HTML` in documents stored and rendered on GitHub or via the `MD2HTML application`.

## Markdown Text
Markdown allows basic formatting using plain text syntax. Below are examples of how to write and render different styles.
### Bold
✍️ *This is how a `bold` text is written in Markdown*:

```md
**MD2HTML**
```
or

```md
__MD2HTML__
```

*This is how `bold` text is displayed*:

**MD2HTML**


### Italic

✍️ *This is how `italic` text is written in Markdown*:

```md
*MD2HTML*
```
or

```md
_MD2HTML_
```

*This is how `italic` text renders*:  

_MD2HTML_

### Bold & Italic

✍️ *This is how `combined bold and italic` text is written in Markdown*:

```md
**MD2HTML and _MD2HTML_**
```
*This is how it is displayed*:

**MD2HTML and _MD2HTML_**

### Strikethrough

* Strikethrough uses two tildes:

✍️ *In Markdown syntax*:
```md
~~MD2HTML.~~
```
*This is how it is displayed*:  
~~MD2HTML~~

## HTML Text

Markdown text inside of an HTML constructor will render incorrectly.

<alert type="warning">These HTML tags are only used when the text is inside an HTML table.</alert>

### Bold
✍️ *This is how `strong,` the equivalent to `bold` in Markdown, is written in `HTML`*:

```html
<strong>MD2HTML</strong>
```
*This is how bold text is rendered in HTML*:  
<strong>MD2HTML</strong>

### Italic 
✍️ *This is how `emphasized` text, the equivalent to `italic` in Markdown, is written in `HTML`*:

```html
<em>MD2HTML</em>
```
*Displayed output*:  
<em>MD2HTML</em>

### Bold & Italic 
✍️ *This is how `strong` and `emphasized` text, the equivalent to `bold` and `italic` in Markdown, is written in `HTML`*:

```html
<strong>MD2HTML and <em>MD2HTML</em></strong>
```
*This is how it is displayed*:  
<strong>MD2HTML and <em>MD2HTML</em></strong>

### Highlighted
✍️ *This is how `highlighted` text is written in `HTML`*:

```html
<mark>MD2HTML</mark>
```
*This is how it is rendered*:  
<mark>MD2HTML</mark>

### Strikethrough
✍️ *This is how `strikethrough` text is written in `HTML`*:
```html
<del>MD2HTML</del>
```
*Rendered in `HTML`*:  
<del>MD2HTML</del>

### Small	
✍️ *This is how `small` text is written in `HTML`*:
```html
<small>MD2HTML</small>
```
*Rendered in HTML*:  
Compared with MD2HTML, <small>MD2HTML</small> looks like this.

### Subscripted
✍️ *This is how `subscripted` text is written in `HTML`*:
```html
<sub>MD2HTML</sub>
```
*Rendered in HTML*:  
Compared with other text <sub>MD2HTML</sub>, this is how it looks.

### Superscripted
✍️ *This is how `superscripted` text is written in `HTML`*:
```html
<sup>MD2HTML</sup>
```
*This is how it is rendered*:  
Compared with other text <sup>MD2HTML</sup>, this is how it looks.
