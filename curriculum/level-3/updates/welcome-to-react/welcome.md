

## React Introduction



### Why React? It's Declarative

**Learning Objective:**

Students will be able to explain what reusable components are and the benefits of implementing them together.

**What Does Declarative Mean?**

- **Declarative Programming:** React allows you to describe what your UI should look like, and it takes care of updating it efficiently. This approach contrasts with imperative programming, where you have to manually manage the UI updates.

**Benefits of Declarative Programming:**

- **Simplifies Development:** You focus on describing the end state of your UI, and React handles the transitions.
- **Reduces Bugs:** By letting React manage the UI updates, there's less room for errors in your code.
- **Improves Readability:** Declarative code is often easier to read and understand because it describes the "what" rather than the "how."

**Example:**

```jsx

function WelcomeMessage() {
  return <h1>Welcome to React!</h1>;
}

```

In this example, the `WelcomeMessage` component declares what the UI should look like, and React renders it accordingly.

---

### Why React? It's Composable!

**Learning Objective:**

Students will be able to explain what reusable components are and the benefits of implementing them together.

**What is Composability?**

- **Composable Components:** React allows you to build complex UIs from small, reusable pieces called components. Each component encapsulates its own structure, style, and behavior, making it independent and easy to manage.

**Benefits of Composable Components:**

- **Reusability:** Components can be reused across different parts of your application, saving time and effort.
- **Maintainability:** Smaller components are easier to test, debug, and maintain.
- **Scalability:** Building UIs with composable components makes your codebase more modular and scalable.

**Example:**

```jsx

function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my website!</p>
    </div>
  );
}

```

In this example, the `Header` component is reusable and can be included in multiple parts of your application.

---

### JSX

**Learning Objective:**

Students will be able to explain what JSX is compared to Vanilla JS and HTML.

**What is JSX?**

- **JSX Syntax:** JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript. It makes it easier to create and understand React components.

**Benefits of JSX:**

- **Improved Readability:** JSX syntax closely resembles HTML, making it more intuitive for developers familiar with HTML.
- **Seamless Integration:** You can write HTML structures directly in your JavaScript code, enhancing productivity and reducing context switching.
- **Enhanced Developer Experience:** JSX supports JavaScript expressions, allowing you to dynamically generate UI elements.

**Example:**

```jsx

const element = <h1>Hello, world!</h1>;

function App() {
  return (
    <div>
      {element}
      <p>This is a JSX example.</p>
    </div>
  );
}

```

In this example, JSX is used to define the `element` and the structure within the `App` component, making the code more readable and concise.

---

By understanding these core concepts—declarative programming, composable components, and JSX—you'll be well-equipped to start building powerful and efficient web applications with React. Remember, React simplifies the development process, enhances code maintainability, and improves the overall user experience. Happy coding!