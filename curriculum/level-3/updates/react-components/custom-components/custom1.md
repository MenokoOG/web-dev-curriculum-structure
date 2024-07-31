# **Introduction to React Custom Components**

## **Overview**

In this lesson, we'll introduce the concept of custom components in React. Custom components are the building blocks of a React application, allowing us to create reusable, modular pieces of UI that make our code more maintainable and organized.

## **What are Custom Components?**

Custom components in React are user-defined elements that encapsulate specific functionality or parts of the user interface. They are similar to JavaScript functions but are used to create and manage portions of the UI. These components help in breaking down complex UIs into smaller, manageable pieces.

## **Why Use Custom Components?**

1. **Reusability**: Custom components can be reused across different parts of your application, reducing redundancy and making your codebase more efficient.
2. **Modularity**: Breaking down the UI into smaller components makes it easier to understand, manage, and debug.
3. **Maintainability**: With components, updates and changes can be made in one place without affecting other parts of the application.

## **Creating a Custom Component**

### **Step 1: Define the Component**

Start by defining a function that returns a JSX element. This function is your custom component.

```jsx

function App() {
//JS

  return (
//JSX
<>
  <h1>Why Learn React?</h1>
  <ol>
    <li>Its a popular library, so I'll be in the know</li>
    <li>I'm more likely to get a job if I know React</li>
  </ol>
</>
  )
}

export default App

```

### **Step 2: Use the Component**

Once defined, you can use your custom component just like any other React element.

```jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

### **Explanation**

- **Function Definition**: `App` is a simple function that returns a `</>` containing an `h1` and a `ol` element.
- **Using the Component**: In the `Main` component, `App` is used within a return demonstrating how custom components can be nested and reused.

## **Key Takeaways**

- **Simplicity**: Custom components are essentially JavaScript functions that return JSX.
- **Usage**: Once created, custom components can be used like any other HTML element, allowing for reusable and modular code.
- **Structure**: Ensure that your custom component is properly structured with a single parent container to keep React organized.

## **Conclusion**

Custom components are fundamental to building efficient and maintainable React applications. By encapsulating UI elements and logic within reusable components, you can create more organized and scalable applications. Start simple, and as you grow more comfortable, you can build more complex and dynamic components.

Happy coding!