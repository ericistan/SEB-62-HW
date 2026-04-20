# The anatomy of a CSS selector

![CSS Code on Screen](https://images.unsplash.com/photo-1556244573-c3686c0f0e78?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## 1. Selectors

The part of the CSS rule that specifies which HTML elements the styles will be applied to. It can be an _element_, _class_, _ID_, or a _**combination**_ of these.

**_Example_**:

- `p` (refers to all `<p>` elements)
- `.container` (refers to all elements with the class "container")
- `#header` (refers to the element with the ID "header")

## 2. Declaration block

The part of the CSS rule that contains one or more _declarations_, enclosed in curly braces `{}`. Each declaration consists of a property and a value, separated by a colon `:`. Example below shows how would a declaration block look like:

**_Example_**:

- `color: blue;`
- `font-size: 14px;`

## 3. Property

The aspect of the element you want to style as shown in the below example. The property represents a specific style attribute of an element, such as _color_, _font_ _size_, _margin_, etc.

**_Example_**:

- `color`
- `font-size`

## 4. Value

The specific setting for the _property_ as shown in the below example. The value can be a _keyword_, a _length_, a _color_ code, etc., depending on the property being styled.

**_Example_**:

- `blue`
- `14px`

## 5. CSS rule example

In this example, `p` is the _selector_ targeting all `<p>` elements. The declaration block contains two declarations: `color: blue;` and `font-size: 14px;`, which set the text color to blue and the font size to 14 pixels for all paragraphs.

```css
/* This is a CSS rule */
p {
  color: blue; /* property: color, value: blue */
  font-size: 14px; /* property: font-size, value: 14px */
}
```

For more information on CSS selectors and how to use them, check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

![Human working on computers](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
