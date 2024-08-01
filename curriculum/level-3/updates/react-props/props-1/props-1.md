### Props Pt 1: Mapping data

### Learning Objectives

By the end of this lesson, students will be able to:

1. **Understand Data Mapping in React**: Explain the purpose and importance of using the `.map` method in React for dynamically generating JSX elements based on an array of data.
2. **Implement Data Mapping with JSX**: Use the `.map` method to iterate over an array of objects and return JSX elements for rendering in a React component.
3. **Differentiate Between Data and UI Logic**: Recognize the benefits of separating data logic from UI logic by using the `.map` method to handle dynamic data rendering in a clean and maintainable way.
4. **Enhance Component Reusability and Scalability**: Demonstrate how data mapping enhances the reusability and scalability of components, allowing for efficient updates and modifications to rendered lists.


### index.css

```css
  .skateboard {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    width: 200px;
    text-align: left;
  }
  
  .skateboard h2 {
    font-size: 1.5em;
  }
  
  .skateboard p {
    margin: 5px 0;
  }
  
```

---

### Understanding Data Mapping in React with JSX Elements

In this part of our series, we're focusing on how the `.map` method in JavaScript is used to dynamically create JSX elements based on an array of data. This is an essential concept in React for rendering lists of items efficiently.

Let's break down the code snippet provided:

```jsx
const skateboards = [
  {
    id: 1,
    name: "Street Cruiser",
    size: ["8.0", "6.0"],
    style: "Street",
    design: "Classic Black",
    price: 75.99
  },
  {
    id: 2,
    name: "Pro Trickster",
    size: ["8.25", "6.0"],
    style: "Park",
    design: "Flame Graphics",
    price: 89.99
  },
  {
    id: 3,
    name: "Vert Master",
    size: ["8.5", "6.0"],
    style: "Vert",
    design: "Skull and Bones",
    price: 95.00
  },
  {
    id: 4,
    name: "Longboard Cruiser",
    size: ["9.0", "6.0"],
    style: "Cruising",
    design: "Palm Trees",
    price: 120.49
  }
];

const skateboardElements = skateboards.map(board => {
  return (
    <div>
      <h1>{board.name}</h1>
      <h1>{board.style}</h1>
      <h1>{board.design}</h1>
      <h1>{board.price}</h1>
    </div>
  )
})

```

### What’s Happening Here?

1. **Array of Objects**: We start with an array of objects named `skateboards`. Each object represents a skateboard with various properties such as `id`, `name`, `size`, `style`, `design`, and `price`.
2. **Mapping Over the Array**: The `.map` method is used on the `skateboards` array. This method iterates over each item in the array and executes the provided function for each element.
3. **Generating JSX Elements**: Inside the `.map` method, we return a JSX `<div>` element for each skateboard object. This `<div>` includes various `<h1>` elements that display the skateboard’s name, style, design, and price.

### Why Use `.map`?

- **Dynamic Rendering**: Using `.map`, we can dynamically generate a list of elements based on our data. This approach is scalable and efficient, especially when dealing with large datasets.
- **Separation of Concerns**: By mapping over the data and returning JSX, we keep our data logic separate from our UI logic, making the code cleaner and easier to maintain.
- **Reusability**: This method allows for easy updates and modifications. For instance, if we need to add another property to our skateboard objects, we can simply update the JSX inside the `.map` function.

---