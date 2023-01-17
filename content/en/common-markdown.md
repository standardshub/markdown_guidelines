---
title: Basic Markdown
description: ''
position: 600
category: Common Markdown
---

## Basic Markdown
This section is dedicated to describe markdown constructors that are normally used in the creation of Technical Documents. 

## Titles
This is how a `title` is displayed:
![image](https://user-images.githubusercontent.com/3258579/124534360-f6dfec80-ddc8-11eb-8735-db82b5d5cb41.png)

This is how a `title` is written at each level:

```md
## Title Level 1
### Title Level 2
#### Title Level 3
##### Title Level 4
###### Title Level 5
```
* In the [MD2HTML](https://markdown.standardshub.io/md2html-overview) application, the `level 1` headers contains two `#`, `##`.
* In the index page, the [MD2HTML](https://markdown.standardshub.io/md2html-overview) app only displays titles from `level 1` to `Level 5`.

## Text
This section describes markdown constructors that can be used in documements stored in GitHub. These documents can be rendered in GitHub or using the [MD2HTML](https://markdown.standardshub.io/md2html-overview) application. 
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

## Table

This is how a `table` is displayed:

| Syntax      | Description |
| ----------- | ----------- |
| Header      |       Title |
| Paragraph   | Text        |

This is how a `table` is written in markdown:

```md
| Syntax      | Description |
| ----------- | ----------- |
| Header      |       Title |
| Paragraph   |       Text  |
```
or
Insert basic HTML table

## Paragraph
### Blockquote

This is how a `blockquote` is displayed:

> blockquote

This is how a `blockquote` is written in markdown:

```md
> blockquote
```
### Code
This is how `code` is displayed:
`code`

This is how `code` is written in markdown:
```md
`code`
```

## Lists
### Ordered List
This is how an `ordered list` is displayed:
1. First item
2. Second item
3. Third item

This is how an `ordered list` is written in markdown:
```md
1. First item
2. Second item
3. Third item
```

### Unordered List
This is how an `unordered list` is displayed:

- First item
- Second item
- Third item

This is how an `unordered list` is written in markdown:
```md
- First item
- Second item
- Third item
```

### Nested List

**DO's**

Next nested level achieved by indenting one/two spaces to the right e.g.

```md
1. First Item
2. Second item
  * Nested item one
  * Nested item two
```

## Link
This is how a `link` is displayed:
[Markdown Guide](https://www.markdownguide.org)

This is how a `link` is written in markdown:
```md
[Markdown Guide](https://www.markdownguide.org)
```

## Image
This is how an `image` is displayed:

![alt text](https://www.markdownguide.org/assets/images/tux.png)

This is how an `image` is written in markdown:

```md
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```
or
```md
![image](https://user-images.githubusercontent.com/3258579/124534970-30fdbe00-ddca-11eb-8a95-ca7dd82eba41.png)

```
In addition of using this markdown constructor, is also possible to use a HTML constuctor [`<figure>`](md2html-extended#figures). This constructor, allows to integrate the image in the [`Index`](md2html-extended#indexes) table and apply the same `Cascade Style Sheets` across all the figures.