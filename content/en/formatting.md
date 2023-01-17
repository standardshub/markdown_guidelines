---
title: Formatting
description: ''
position: 120
category: Constructors
---

## Introduction

## Ignore Markdown Formatting

**DO's**

* To ignore markdown formatting insert a  backslash `\` character before the markdown character e.g.

```md
\[RFC6655\]
```

\[RFC6655\]

## Page Break

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

## Constructors Involving Formatting

**DON'Ts**

* Formatting instructions should be done using CSS and NOT md or html
* No style should be introduced on any of the HTML constructors