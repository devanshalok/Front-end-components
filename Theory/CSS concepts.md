1. **What is the difference between CSS and CSS3?**

   - CSS (Cascading Style Sheets) is the language used to style HTML documents, controlling the layout, colors, fonts, and overall appearance. CSS3 is the latest version of CSS that brings new features and capabilities, such as rounded corners, shadows, gradients, transitions, animations, and new layout techniques like Flexbox and Grid. CSS3 also introduces media queries for responsive design, allowing styles to change based on device characteristics like screen size.

2. **What are the selectors in CSS?**

   - CSS selectors are used to select and style HTML elements. Common selectors include:
     - **Element Selector:** Selects all elements of a specific type (`p`, `h1`, etc.).
     - **Class Selector (`.className`):** Selects elements with a specific class.
     - **ID Selector (`#idName`):** Selects the element with a specific ID.
     - **Attribute Selector (`[type="text"]`):** Selects elements based on an attribute value.
     - **Pseudo-class Selector (`:hover`, `:first-child`):** Selects elements based on their state.
     - **Pseudo-element Selector (`::before`, `::after`):** Styles specific parts of an element.

3. **What is a media query in CSS?**

   - Media queries are used to apply different styles based on the conditions like screen size, resolution, orientation, and other media features. They are essential for responsive design, allowing websites to adapt their layout and appearance to various devices. Example:
     ```css
     @media (max-width: 600px) {
       body {
         background-color: lightblue;
       }
     }
     ```

4. **What are the different positions in CSS?**

   - The `position` property in CSS specifies how an element is positioned in the document. Types include:
     - **Static (default):** The element is positioned according to the normal flow of the document.
     - **Relative:** The element is positioned relative to its normal position.
     - **Absolute:** The element is positioned relative to its nearest positioned ancestor.
     - **Fixed:** The element is positioned relative to the browser window.
     - **Sticky:** The element toggles between relative and fixed based on the user's scroll position.

5. **What is BOM in CSS?**

   - BOM (Box Object Model) is not directly a CSS term; it often confuses with the DOM (Document Object Model). In CSS context, the term is likely a misreference or typographical error and could refer to concepts like Box Model or specific layout concerns in web design.

6. **What is the difference between px, unit, em, rem in CSS?**

   - **px (Pixels):** An absolute unit representing a fixed size on the screen.
   - **em:** A relative unit based on the font size of the element’s parent. If the parent’s font size is 16px, `1em` equals 16px.
   - **rem (Root em):** A relative unit based on the root element's font size (`<html>`). Unlike `em`, `rem` doesn’t cascade and is consistent across the entire document.
   - **unit:** This term generally refers to measurement units like px, em, rem, %, vw, etc.

7. **What is Flexbox in CSS?**

   - Flexbox (Flexible Box Layout) is a CSS layout module that provides an efficient way to align, distribute, and space elements within a container, especially when the size of the items is unknown or dynamic. Flexbox is one-dimensional (working with rows or columns), allowing easy alignment and space distribution between items.

8. **What is a pseudo-selector in CSS?**

   - Pseudo-selectors allow you to style elements based on their state or specific characteristics without adding extra HTML. Common pseudo-selectors include:
     - **Pseudo-classes (`:hover`, `:active`, `:focus`):** Styles elements based on user interaction or state.
     - **Pseudo-elements (`::before`, `::after`):** Allows styling specific parts of an element, such as adding content before or after the element’s content.

9. **How to make a website responsive?**

   - A website is made responsive by using fluid grids, flexible images, and media queries. Key techniques include:
     - Using percentages or relative units like `em` and `rem` instead of fixed units.
     - Applying media queries to adapt styles for different screen sizes.
     - Implementing responsive frameworks like Bootstrap.
     - Using Flexbox and CSS Grid for flexible layouts.

10. **What are the breakpoints for viewport responsive devices?**

    - Breakpoints are specific viewport widths where the layout of a webpage should change. Common breakpoints include:
      - **Extra small devices (phones):** 0px - 576px
      - **Small devices (tablets):** 576px - 768px
      - **Medium devices (small laptops):** 768px - 992px
      - **Large devices (desktops):** 992px - 1200px
      - **Extra large devices (large desktops):** 1200px and up

11. **Why do we use box-sizing in CSS?**
    - The `box-sizing` property controls how the total width and height of elements are calculated. The most commonly used value is `border-box`, which includes padding and border within the element’s specified width and height, preventing layout issues and making it easier to size elements consistently. It solves problems associated with the default `content-box` model, where padding and borders are added outside the defined width.
