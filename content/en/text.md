---
title: Text
description: ''
position: 140
category: MD2HTML App
---

This section describes markdown constructors that can be used in documements stored in GitHub. These documents can be rendered in GitHub or using the [MD2HTML](https://markdown.standardshub.io/md2html-overview) application. 

## Test in Markdown
### Bold
This is how a `bold text` is displayed:

**bold text**´

This is how a `bold text` is written is written in markdown:

```md
**bold text**
```
or

```md
__underscores__
```

__underscores__

### Italic

This is how an `italicized text` is displayed:

_italicized text_

This is how an `italicized text` is written in markdown:

```md
*italicized text*
```
or
```md
_italicized text_
```

### Bold & Italic

**DO's**

* Combined bold and italic text with:

```md
**asterisks and _underscores_**
```

**asterisks and _underscores_**

### Strikethrough Text

* Strikethrough uses two tildes:

```md
~~Scratch this.~~
```

~~Scratch this.~~

## Text in HTML
These HTML tags are only used when the text is inside of an HTML table.

### Deleted text
Equivalent to `strikethrough` in markdown.
```html
<del>...</del>
```
### Emphasised text
Equivalent to `italic` in markdown.
```html
<em>...</em>
```
### Marked/highlighted text
It is `highlight` text. It doesn't have an equivalent in markdown.
```html
<mark>...</mark>
```

### Important text
Equivalent to `bold` in markdown
```html
<strong>...</strong>
```