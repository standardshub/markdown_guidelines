---
title: Lists
description: ''
position: 160
category: Constructors
---

## Introduction
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

## HTML Lists

### Ordered List

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

### Unordered List

```html
<ul>
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ul>
```

**DON'Ts**

* DON'T use markdown tables

### Nested List
[TBD]