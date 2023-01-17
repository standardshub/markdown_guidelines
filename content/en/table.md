---
title: Table
description: ''
position: 170
category: Constructors
---

## Introduction

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