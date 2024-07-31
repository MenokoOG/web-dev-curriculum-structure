# React CSS Styles: Changing from `class` to `className`

### Introduction

When working with React, JSX allows us to write HTML-like syntax within JavaScript. However, there are important distinctions to be aware of, particularly when it comes to applying CSS styles. One key difference is the use of `className` in JSX instead of the `class` attribute used in HTML.

### Key Points

- **JSX Syntax**:
    - JSX lets you write HTML-like code within JavaScript.
    - It must be transpiled to JavaScript before it can be executed by the browser.
- **Using CSS Classes in HTML vs. JSX**:
    - In HTML, you use the `class` attribute to apply CSS classes.
    - In JSX, you use `className` instead of `class`.
- **Why `className`?**:
    - `class` is a reserved keyword in JavaScript, so JSX uses `className` to avoid conflicts.
    - This ensures consistency and prevents potential errors in your code.

### Examples

### HTML Example

In HTML, you use the `class` attribute like this:

```html
htmlCopy code
<div class="container">
  <h1 class="title">Hello, World!</h1>
  <p class="description">This is an example of using class in HTML.</p>
</div>

```

### JSX Example

In JSX, you use `className` instead:

```jsx
jsxCopy code
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="title">Hello, World!</h1>
      <p className="description">This is an example of using className in JSX.</p>
    </div>
  );
}

export default App;

```

### Additional Points

- **Transpilation**:
    - Tools like Babel transpile JSX into JavaScript, converting `className` to `class` in the process.
- **Common Errors**:
    - Forgetting to use `className` in JSX can lead to errors or unexpected behavior.
    - Always double-check your JSX code to ensure you're using `className` for CSS classes.

### Conclusion

Understanding the switch from `class` in HTML to `className` in JSX is crucial for writing clean and functional React code. This small change helps prevent conflicts with JavaScript reserved keywords and ensures your components are styled properly. With practice, using `className` in JSX will become second nature, allowing you to build well-structured and maintainable React applications.