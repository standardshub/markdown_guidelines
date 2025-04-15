---
title: Formatting
description: ''
position: 120
category: MD2HTML App
---
This section explains how to use constructors to manage document formats.

* **All formatting should be handled using CSS**, NOT `MD` or `HTML.`
* **Do not apply custom styles** to any HTML constructors.


## 📄 Page Break

✍️ *To insert a page break, use the following syntax*:

```md
{:page-break}
```

* Must be placed at the beginning of a line.
* Only works where Markdown is expected (not inside HTML blocks).
* Follow the constructor with a blank line to ensure proper rendering.

## ⬇️ Horizontal Rule

✍️ *Markdown Syntax*
```md
---
```
*This is how a `horizontal rule` is displayed*:

---

## 🚫 Ignoring Markdown Formatting

✍️ *To ignore Markdown formatting, insert a  backslash `\` character before the Markdown character, e.g.*

```md
\[RFC6655\]
```
