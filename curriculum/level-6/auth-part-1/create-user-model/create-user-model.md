# Building a User Model with Mongoose & Express

## **What is a User Model?**

- A representation of user data within a web application.
- Defines the structure and properties for storing user information (e.g., username, email, password).
- Mongoose, a popular ODM (Object Data Mapper) for MongoDB, allows us to create user models with features like validation and data manipulation.

## **Why User Models?**

- Secure data storage: Ensures organized and secure storage of user information.
- Data consistency: Enforces a defined structure for user data, preventing inconsistencies.
- Mongoose functionalities: Leverages Mongoose's features for validation, data manipulation, and queries.

## **Defining the User Schema**

- A schema acts as a blueprint defining the structure and data types for the user model.
- Common user schema properties:
    - username (string, required)
    - email (string, required, unique) - Ensures unique email addresses for each user.
    - password (string, required) - We'll cover secure password hashing in a dedicated lesson.

## **Creating a Mongoose User Model**

1. Import the Mongoose schema library.
2. Define the user schema with properties and data types.
3. Create a Mongoose model using the defined schema. This model allows you to interact with user data in your application.

## **Key Points:**

- User models are crucial for managing user data effectively in Mongoose-based applications.
- The schema defines the structure and data types for user information.
- Mongoose models provide functionalities for creating, retrieving, updating, and deleting user data.

```jsx
const userSchema = new Schema({
username: {
type: String,
required: true,
lowercase: true,
unique: true,
},
password: {
type: String,
required: true,
},
memberSince: {
type: Date,
default: Date.now,
},
isAdmin: {
type: Boolean,
default: false,
},});
```