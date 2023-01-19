---
title: Lists
description: ''
position: 160
category: MD2HTML App
---

## Lists in Markdown
### Ordered List
This is how an `Ordered list` is displayed:
1. First item
2. Second item
3. Third item

This is how an `Ordered list` is written in markdown:
```md
1. First item
2. Second item
3. Third item
```

### Unordered List
This is how an `Unordered list` is displayed:

- First item
- Second item
- Third item

This is how an `Unordered list` is written in markdown:
```md
- First item
- Second item
- Third item
```

### Nested List

Next nested level achieved by indenting two spaces to the right e.g.

1. First item
2. Second item
   * Nested item 1
   * Nested item 2
     1. Nested item 1
     2. Nested item 2
3. Third item

This is how an `Nested list` is written in markdown:
```md
1. First item
2. Second item
   * Nested item 1
   * Nested item 2
     1. Nested item 1
     2. Nested item 2
3. Third item
```
## Lists in HTML

### Ordered List

* type="1" - numbers (default)
* type="A" - uppercase letters
* type="a" - lowercase letters
* type="I" - uppercase roman numbers
* type="i" - lowercase roman numbers

This is `Ordered list` written in HTML:
```html
<ol type = "1">
    <li>Requirements Document</li>
    <li>Core TS</li>
    <li>Transport TS</li>
</ol>
```
Displayed `Ordered list`:

<ol type = "1">
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ol>

### Unordered List

This is `Unordered list` written in HTML:
```html
<ul>
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ul>
```
Displayed `Unordered list`:

<ul>
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ul>

**DON'Ts**

* DON'T use markdown tables

### Nested List

This is an example of `Nested list` (list inside of list) written in HTML:

```html
<ul>
  <li>Requirements Document
     <ul>
        <li>Doc 1</li>
        <li>Doc 2</li>
      </ul>
  </li>
  <li>Core TS
     <ol>
      <li>TS 1</li>
      <li>TS 2</li>
     </ol>
  </li>
  <li>Transport TS</li>
</ul>
```
Displayed `Nested list`:

<ul>
  <li>Requirements Document
     <ul>
        <li>Doc 1</li>
        <li>Doc 2</li>
      </ul>
  </li>
  <li>Core TS
     <ol>
      <li>TS 1</li>
      <li>TS 2</li>
     </ol>
  </li>
  <li>Transport TS</li>
</ul>
