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

12. **What is CSS selector specificity and how does it work?**

- CSS selector specificity determines which styles are applied when multiple conflicting styles target the same element. It works by assigning a weight to each type of selector: inline styles have the highest specificity, followed by IDs, classes, attributes, and pseudo-classes, and lastly, element selectors. Specificity is calculated by adding points based on these weights; higher specificity overrides lower specificity.

13. **What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?**

- **Resetting** CSS removes all default browser styling, making elements appear the same across browsers. **Normalizing** CSS preserves useful default styles while ensuring consistency between browsers. Normalizing is generally preferred as it maintains user agent styles where appropriate, requiring less customization and resulting in a more predictable layout.

14. **Describe floats and how they work.**

- Floats allow elements to be positioned to the left or right within their container, causing surrounding content to wrap around them. Originally used for text wrapping around images, floats are now mostly replaced by modern layout techniques like Flexbox and Grid due to their more predictable behavior.

15. **Describe z-index and how stacking context is formed.**

- `z-index` controls the stacking order of positioned elements on the z-axis (front-to-back). Stacking context is formed by elements with position values other than static and is influenced by parent elements. Higher `z-index` values bring elements to the front within the same stacking context.

16. **Describe Block Formatting Context (BFC) and how it works.**

- BFC is a part of the visual CSS rendering that manages the layout of block-level elements. It prevents margin collapse between adjacent blocks, contains floats, and ensures elements within it don't overlap outside of their container. Elements that trigger BFC include floats, overflow values other than visible, and display types like flex and grid.

17. **What are the various clearing techniques and which is appropriate for what context?**

- Common clearing techniques include:
  - **Clearfix**: Adds an invisible block element to clear floats within a container.
  - **Overflow**: Setting `overflow: auto` or `overflow: hidden` on the container creates a new BFC that contains floats.
  - **Clear Property**: Directly applying `clear: both` to an element following floated elements.
  - Use clearfix for general cases, overflow for simpler float containment, and clear for individual float issues.

18. **Explain CSS sprites, and how you would implement them on a page or site.**

- CSS sprites combine multiple images into a single file to reduce HTTP requests, improving load times. Use background-position in CSS to display specific portions of the sprite. Implement by creating a sprite sheet, applying it as a background image, and adjusting positions to display the correct part of the image.

19. **How would you approach fixing browser-specific styling issues?**

- Identify issues using developer tools, and apply fixes like vendor prefixes (`-webkit-`, `-moz-`, etc.), feature detection with Modernizr, or conditional comments for older versions of IE. Testing across multiple browsers is key to ensure consistency.

20. **How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?**

- Use progressive enhancement by building a basic, functional experience and adding advanced features for capable browsers. Employ feature detection, polyfills, and responsive design to ensure functionality on older or limited browsers.

21. **What are the different ways to visually hide content (and make it available only for screen readers)?**

- Techniques include `visibility: hidden;`, `display: none;`, `opacity: 0;`, positioning off-screen (`position: absolute; left: -9999px;`), and the `clip` or `clip-path` properties. For accessibility, the `.sr-only` class (used in frameworks like Bootstrap) is ideal, as it hides content visually but keeps it accessible to screen readers.

22. **Have you ever used a grid system, and if so, what do you prefer?**

- Yes, common grid systems include CSS Grid, Flexbox, and frameworks like Bootstrap. CSS Grid is preferred for two-dimensional layouts, while Flexbox is better suited for one-dimensional layouts (rows or columns). CSS Grid offers more control and flexibility for complex designs.

23. **Have you used or implemented media queries or mobile-specific layouts/CSS?**

- Yes, media queries are essential for responsive design, allowing styles to adapt based on screen size, resolution, and device orientation. They enable mobile-first design, ensuring a better user experience across devices.

24. **Are you familiar with styling SVG?**

- Yes, SVGs can be styled using CSS properties like `fill`, `stroke`, and `stroke-width`. They can be styled inline, via external CSS, or with JavaScript. SVG styling allows for scalable, resolution-independent graphics with the ability to animate and interact directly with CSS.

25. **Can you give an example of an @media property other than screen?**

- `@media print` is used for print styles, adapting the page’s layout and styles when printed. Other examples include `@media speech` for screen readers and `@media (min-width: 600px)` for device-specific adjustments.

26. **What are some of the "gotchas" for writing efficient CSS?**

- Common pitfalls include overusing universal selectors (`*`), deep nesting, excessive use of `!important`, relying on IDs over classes (high specificity), and lack of proper optimization of CSS files. Efficient CSS should prioritize readability, maintainability, and minimal impact on performance.

27. **What are the advantages/disadvantages of using CSS preprocessors?**

- **Advantages**: Preprocessors like SASS and LESS offer features like variables, nesting, and mixins, enhancing CSS with programming capabilities. They help keep CSS modular, maintainable, and scalable.
- **Disadvantages**: They add a compilation step, require additional setup, and can lead to over-complexity if not used carefully.

28. **Describe what you like and dislike about the CSS preprocessors you have used.**

- **Likes**: SASS and LESS improve CSS organization, provide variables, and allow for reusable code through mixins and functions.
- **Dislikes**: The additional compilation step can complicate the build process, and the syntactical differences can be a learning curve for beginners.

29. **How would you implement a web design comp that uses non-standard fonts?**

- Use `@font-face` to define and load custom fonts. Host the fonts on your server or use a web font service like Google Fonts or Adobe Fonts. Ensure cross-browser compatibility by including multiple font formats (WOFF, TTF, EOT).

30. **Explain how a browser determines what elements match a CSS selector.**

- Browsers parse the CSS and match selectors from right to left, starting with the most specific part. They check if the rightmost selector matches any element and then work backward through the rest of the selectors. Matching elements are then styled according to specificity and cascade rules.

31. **Describe pseudo-elements and discuss what they are used for.**

- Pseudo-elements (`::before`, `::after`, `::first-letter`, etc.) allow you to style specific parts of an element, such as adding decorative content without modifying the HTML. Common uses include adding icons, styling the first letter of a paragraph, and more.

32. **Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.**

- The CSS box model describes how elements are structured in terms of content, padding, border, and margin. The `box-sizing` property lets you switch between models:
  - `content-box` (default): Padding and border are outside the defined width/height.
  - `border-box`: Includes padding and border within the defined width/height.

33. **What does \* { box-sizing: border-box; } do? What are its advantages?**

- It sets all elements to use the `border-box` model, where padding and borders are included in the element’s total width and height. This simplifies layout calculations and prevents unwanted size changes, making designs more predictable.

34. **What is the CSS display property and can you give a few examples of its use?**

- The `display` property defines how elements are displayed on the page. Examples include:
  - `block`: Takes up the full width available.
  - `inline`: Sits inline with text without breaking line flow.
  - `flex`: Creates a flexible container for aligning items.
  - `grid`: Creates a grid container for two-dimensional layout.

35. **What's the difference between inline and inline-block?**

- `inline`: Does not start on a new line and ignores width/height properties.
- `inline-block`: Behaves like inline but respects width/height and allows margin/padding adjustments.

36. **What's the difference between a relative, fixed, absolute, and statically positioned element?**

- **Static**: Default, follows normal document flow.
- **Relative**: Positioned relative to its normal position.
- **Absolute**: Positioned relative to the nearest positioned ancestor.
- **Fixed**: Positioned relative to the viewport, staying fixed during scrolling.

37. **What existing CSS frameworks have you used locally, or in production? How would you change/improve them?**

- Common frameworks include Bootstrap, Foundation, and Tailwind CSS. Improvements could involve reducing file size by removing unused CSS, customizing design tokens for consistency, and improving accessibility by enhancing component ARIA support.

38. **Have you played around with the new CSS Flexbox or Grid specs?**

- Yes, both Flexbox and Grid offer modern layout capabilities. Flexbox excels in one-dimensional layouts (rows or columns), while Grid is perfect for complex two-dimensional designs. Both provide efficient, flexible, and responsive ways to manage layouts.

39. **Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?**

- **Responsive Design**: Adapts layouts based on device size, often starting with desktop designs.
- **Mobile-First Strategy**: Prioritizes the mobile experience, building from a base set of styles and progressively enhancing for larger screens. Mobile-first ensures performance optimization and user-centric design from the outset.

40. **How is responsive design different from adaptive design?**

- **Responsive Design**: Uses flexible layouts and media queries to adapt fluidly to different screen sizes.
- **Adaptive Design**: Uses distinct fixed layouts designed for specific screen sizes, adapting by detecting the device type.

41. **Have you ever worked with retina graphics? If so, when and what techniques did you use?**

- Yes, retina graphics involve high-resolution images optimized for devices with high pixel density (e.g., Retina displays). Techniques include using `srcset` for responsive images, SVGs for scalability, and media queries to deliver appropriate images for each device.

42. **Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?**

- `translate()` is preferred for performance as it leverages the GPU, providing smoother animations and transforms without triggering layout recalculations. Absolute positioning is used when precise positioning relative to an ancestor element is needed, but it can affect document flow and layout.
