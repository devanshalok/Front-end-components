1. **What is `<!DOCTYPE html>` in HTML5?**

   - `<!DOCTYPE html>` is a declaration that defines the document type and version of HTML being used. It helps the browser to render the page correctly by switching to the standard mode instead of quirks mode, ensuring compatibility with modern web standards.

2. **What is the difference between `div` and `span` in HTML?**

   - `div`: A block-level element used to group larger sections of content, creating structure in HTML. It starts on a new line and takes up the full width available.
   - `span`: An inline element used to group small chunks of content within a line, such as text or other inline elements, without creating new lines or disrupting the flow of content.

3. **What are semantic tags and non-semantic tags in HTML?**

   - **Semantic Tags**: Tags that clearly describe their meaning and the content within them, making the structure of the page more understandable to both developers and search engines. Examples include `<header>`, `<footer>`, `<article>`, and `<section>`.
   - **Non-Semantic Tags**: Tags that do not convey any information about the content. Examples include `<div>` and `<span>`, which are used for layout and styling without describing the content.

4. **What is the difference between HTML and HTML5?**

   - HTML5 is the latest version of HTML that introduced new elements, attributes, and APIs for more dynamic and interactive web pages. Key differences include:
     - **New Elements**: Such as `<article>`, `<section>`, `<header>`, `<footer>`, and `<canvas>`.
     - **Enhanced Forms**: Input types like `email`, `date`, `number`, and attributes like `placeholder`.
     - **APIs**: Native support for audio, video, local storage, and offline web applications.
     - **Simplified Doctype**: The doctype declaration is now `<!DOCTYPE html>` compared to the longer doctype in earlier versions.

5. **What is the `iframe` tag in HTML5?**

   - The `<iframe>` tag is used to embed another HTML document within the current document. It allows you to display content like web pages, videos, or interactive maps inside a section of your page.

6. **What are the formatting tags in HTML?**

   - Formatting tags in HTML are used to style text and content. Examples include:
     - `<b>` for bold text
     - `<i>` for italic text
     - `<u>` for underlined text
     - `<strong>` for important text
     - `<em>` for emphasized text
     - `<mark>` for highlighted text
     - `<sup>` for superscript text
     - `<sub>` for subscript text.

7. **What is the difference between `<b>` and `<strong>` in HTML?**

   - Both `<b>` and `<strong>` make text bold, but `<strong>` has semantic importance. `<strong>` indicates that the text is of great importance, whereas `<b>` only adds stylistic boldness without implying importance.

8. **What is the viewport attribute in HTML?**

   - The viewport attribute, set using the `<meta>` tag, controls the layout of the webpage on different devices and screen sizes. Common usage:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     ```
   - It specifies the viewport’s width and initial zoom level, making the site responsive and ensuring it scales correctly on mobile devices.

9. **What is an attribute in HTML?**

   - An attribute provides additional information about an HTML element, modifying its behavior or appearance. Attributes are placed inside the opening tag of an element, like `id`, `class`, `href`, `src`, `style`, and more. For example:
     ```html
     <img src="image.jpg" alt="Description" width="200" />
     ```

10. **What are block-level and inline elements in HTML?**

    - **Block-Level Elements**: Elements that start on a new line and take up the full width available. Examples include `<div>`, `<p>`, `<h1>`, `<ul>`, and `<section>`.
    - **Inline Elements**: Elements that do not start on a new line and only take up as much width as necessary. Examples include `<span>`, `<a>`, `<img>`, and `<strong>`.

### 12. How do you serve a page with content in multiple languages?

To serve a page with content in multiple languages, you can use several approaches:

1. **`lang` Attribute**: Set the `lang` attribute in the `<html>` tag to specify the language of the entire document. You can also use the `lang` attribute on specific elements to denote different languages.

   ```html
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>Multi-language Page</title>
     </head>
     <body>
       <p lang="en">Hello, world!</p>
       <p lang="es">¡Hola, mundo!</p>
       <p lang="fr">Bonjour, le monde!</p>
     </body>
   </html>
   ```

2. **Localized Content Using Separate Pages**: You can create separate HTML pages for each language version of your content and provide links or language selectors to switch between them.

3. **Dynamic Content Loading**: Use JavaScript to dynamically load language-specific content from external files (e.g., JSON or XML) based on the user’s language preference.

4. **Server-Side Solutions**: Use server-side languages like PHP, Node.js, or Python to detect the user’s language preferences (using headers or URL parameters) and serve the corresponding language content.

5. **Content Management Systems (CMS)**: Many CMS platforms like WordPress offer multilingual plugins that allow serving content in multiple languages.

### 13. Consider HTML5 as an open web platform. What are the building blocks of HTML5?

HTML5 introduced several new elements, APIs, and concepts that expanded its capabilities as an open web platform. The building blocks of HTML5 include:

1. **Semantic Elements**: New tags that add meaning to the structure of the document:

   - `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<main>`, `<figure>`, etc.

2. **Forms and Input Enhancements**: Improved form controls with new attributes and input types:

   - Input types: `email`, `date`, `time`, `number`, `range`, `color`, etc.
   - New attributes: `required`, `placeholder`, `autofocus`, `pattern`, etc.

3. **Graphics and Multimedia**: Elements to embed multimedia content:

   - `<canvas>` for 2D drawing.
   - `<svg>` for scalable vector graphics.
   - `<audio>` and `<video>` for multimedia content.

4. **APIs and DOM Enhancements**: JavaScript APIs for improved interactivity and capabilities:

   - Geolocation API, Web Storage (localStorage and sessionStorage), Web Workers, WebSockets, Fetch API, and more.

5. **Offline and Storage**: Mechanisms for offline capabilities:

   - Web Storage, IndexedDB, Application Cache (deprecated).

6. **Connectivity**: APIs for real-time communication:

   - WebSockets, Server-Sent Events (SSE).

7. **Performance and Integration**: Features to enhance performance and integration:

   - `requestAnimationFrame()`, Web Workers, and optimizations for asynchronous loading of resources.

8. **Device Access**: APIs to access device hardware:
   - Geolocation, Battery Status API, Vibration API, etc.

### 14. Describe the difference between `<script>`, `<script async>`, and `<script defer>`.

- **`<script>`**:

  - This is the standard way to include JavaScript files.
  - It blocks the HTML parsing while the script is downloaded and executed.
  - The browser stops rendering the page until the script finishes loading and executing, which can affect page load times.

- **`<script async>`**:

  - Scripts with the `async` attribute are downloaded in parallel with the HTML parsing and executed as soon as they are ready.
  - It does not block HTML parsing, but the script will execute immediately when downloaded, which could still interrupt the rendering process.
  - Suitable for independent scripts like analytics that don’t rely on other scripts or need to execute after other scripts.

- **`<script defer>`**:
  - Scripts with the `defer` attribute are downloaded in parallel with HTML parsing but are executed only after the HTML document has been completely parsed.
  - Ensures that the script will not interrupt HTML parsing and will execute in the order they appear in the document.
  - Ideal for scripts that need to manipulate the DOM after it is fully constructed.

### 15. What is progressive rendering?

**Progressive rendering** refers to techniques used to improve the user experience by rendering content on the screen as quickly as possible, even if not all the resources have been fully loaded. This approach is particularly useful for enhancing the perceived performance of a web page, especially on slower connections.

**Common Techniques in Progressive Rendering:**

1. **Lazy Loading**: Loading images, videos, or other resources only when they are needed, e.g., when they enter the viewport.
2. **Skeleton Screens**: Displaying a placeholder UI that resembles the actual content layout while the main content is still loading.
3. **Content Prioritization**: Loading critical content first, such as above-the-fold content, and deferring less important elements.
4. **Async and Defer Scripts**: Using `async` and `defer` attributes to load scripts without blocking rendering.
5. **Server-Side Rendering (SSR)**: Rendering pages on the server and sending fully rendered HTML to the client, allowing users to see the content faster.

### 16. Why would you use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.

The `srcset` attribute is used to define multiple image sources for different screen sizes, resolutions, and devices. It helps improve performance and display quality by serving the most appropriate image for the user’s device, reducing unnecessary loading of large images.

**Example:**

```html
<img
  src="image-small.jpg"
  srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
  alt="Responsive Image"
/>
```

**How the Browser Evaluates `srcset`:**

1. The browser looks at the `srcset` attribute, which contains a list of image sources and their descriptors (e.g., width or pixel density).
2. It checks the `sizes` attribute (if provided) to determine the most appropriate image size based on the device’s current viewport width and display resolution.
3. The browser then selects the best image source from the `srcset` list that matches the current conditions.
4. If `sizes` is not provided, the browser will choose the image that best fits based on the default viewport size.

### 17. What are empty elements in HTML?

**Empty elements** are HTML elements that do not have closing tags and cannot contain any content between them. They are self-closing elements that only serve a specific purpose.

**Examples of Empty Elements:**

- `<img>`: Embeds images.
- `<br>`: Inserts a line break.
- `<hr>`: Creates a horizontal rule or divider.
- `<input>`: Defines input fields in forms.
- `<meta>`: Defines metadata about the document.
- `<link>`: Defines the relationship between the document and external resources (e.g., stylesheets).
- `<source>`: Specifies multiple media resources for media elements like `<video>` and `<audio>`.

### 18. What is the difference between Canvas and SVG?

Both Canvas and SVG are used for rendering graphics on the web, but they are fundamentally different in how they work and are used.

**Canvas:**

- **Definition**: A raster-based graphics drawing surface where you can programmatically draw shapes, lines, images, and more using JavaScript.
- **Rendering**: Immediate mode; drawing commands are executed directly and cannot be manipulated once rendered.
- **Performance**: Better for dynamic, pixel-based rendering (e.g., games, real-time visualizations).
- **Scalability**: Does not scale well because it is resolution-dependent. Zooming can cause pixelation.
- **Interactivity**: No built-in support for event handling; interactivity must be manually coded.
- **Use Case**: Real-time graphics, games, animations, image manipulation.

**SVG (Scalable Vector Graphics):**

- **Definition**: A vector-based XML format for describing 2D graphics. Graphics are defined with shapes like paths, circles, and text, and are represented in a DOM structure.
- **Rendering**: Retained mode; SVG maintains the scene graph of elements, making them manipulable after rendering.
- **Performance**: Better for static images and graphics that require scaling (e.g., icons, logos, diagrams).
- **Scalability**: Scales perfectly without losing quality since it’s vector-based.
- **Interactivity**: Supports event handling natively (e.g., click, hover) as each element is part of the DOM.
- **Use Case**: Icons, charts, scalable graphics, diagrams.
