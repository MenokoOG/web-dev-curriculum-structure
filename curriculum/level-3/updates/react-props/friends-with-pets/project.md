## Objective

Create a React app that displays a list of friends and their pets. This assignment will help you practice creating components, using props, and rendering lists dynamically in React.

### Requirements

The final product should render a list of friends. Each friend should be displayed with their name and age, followed by a list of their pets. Each pet should be displayed with its name and breed.

### Instructions

1. **Project Setup:**
    - Start a new React project or use an existing one.
    - Create the following components: `<FriendList />`, `<Friend />`, and `<Pet />`.
2. **Data Provided:**
Use the following data to populate your components:
const friends = [
  {
    name: "Ben",
    age: 29,
    pets: [
      { name: "spot", breed: "tabby" },
      { name: "John Johnson", breed: "husky" },
      { name: "Bear the bear", breed: "Grizzly" }
    ]
  },
  {
    name: "Bob",
    age: 31,
    pets: [{ name: "Sally", breed: "Australian Shepard" }]
  },
  {
    name: "Marcus",
    age: 25,
    pets: [
      { name: "Indy", breed: "Akita" },
      { name: "Anna", breed: "persian cat" }
    ]
  },
  {
    name: "Jacob",
    age: 20,
    pets: [
      { name: "fluffy", breed: "sphynx cat" },
      { name: "patches", breed: "sphynx cat" },
      { name: "tiger", breed: "sphynx cat" },
      { name: "oscar", breed: "sphynx cat" }
    ]
  }
];

​
Styling:
Use appropriate HTML (JSX) tags and CSS to ensure the app is visually appealing and easy to read.
Verification:
Check that the app displays each friend with their pets listed underneath them, as specified.
Ensure that the data is rendered accurately according to the provided structure.
By completing this assignment, you will strengthen your skills in managing component hierarchy and rendering lists in React.