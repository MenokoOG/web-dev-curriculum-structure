
# Relating Data in MongoDB

# Relating Data in MongoDB (one to many)

https://youtu.be/CkS6hk3hdC0

## Director Code Below :

## Director Model

Create a director.js and add the following code

```jsx
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const directorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Director", directorSchema)
```

## Director Router

Create a directorRouter.js and add the following code

```jsx
const express = require("express")
const directorRouter = express.Router()
const Director = require("../models/director")

directorRouter.get("/", async (req, res, next) => {
    try {
        const foundDirectors = await Director.find()
        return res.status(200).send(foundDirectors)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

directorRouter.post("/", async (req, res, next) => {
    try {
        const newDirector = new Director(req.body)
        const savedDirector = await newDirector.save()
        return res.status(201).send(savedDirector)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = directorRouter
```

## Director Middleware

Create a directors endpoint middlware and add the following code

```jsx
app.use("/directors", requiere("./routes/directorRouter"))
```

## Updated Movie Model/Schema

Create an author property and set to Schema.Types.ObjectId to reference a unique director

```jsx
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    // Updated Author Property to hold the unique id for who created each movie.
    author: {
        type: Schema.Types.ObjectId, // mongoose schema syntax for database id
        ref : "Director" // mongoose referance to the Director Schema/Model
    }
})

module.exports = mongoose.model("Movie", movieSchema)
```

## Learning Objectives

- Students will be able to describe the difference between a one-to-many and many-to-one relationship in mongodb.
- Students will be able to write a post request adding a movie to the database by a unique director. (One-to-Many)
- Students will be able to write a get request fetching the movies from the database by a unique director. (Many-to-One)

## What is a One-to-Many Relationship?

In a one-to-many relationship, a single document (parent) can be linked to multiple related documents (children). Imagine a blog post (parent) with many comments (children). Each blog post can have numerous comments, but each comment belongs to only one specific post.

In MongoDB, we model this relationship by storing a reference (often an ID) from the child document to the parent document within the child's schema. This establishes the connection without needing complex joins like in relational databases.

## What is a Many-to-One Relationship?

A many-to-one relationship is essentially the opposite of one-to-many. Here, multiple documents (children) can be linked to a single parent document. Going back to our example, many user profiles (children) can follow a single blog post (parent). Each user can follow many posts, but a post is typically followed by many users.

Similar to one-to-many relationships, we achieve this by storing a reference from the child document (user profile) to the parent document (blog post) within the child's schema.

## **Imagine a Library**

Think of a library as an analogy for our data. Books are like movies, and authors are like directors. A single author (director) can write many books (movies), but a book (movie) typically has only one author (director). This represents a **one-to-many** relationship.

In Mongoose, we can model these relationships within our schema definitions.

## **Code Breakdown: One-to-Many Example**

## JavaScript

```jsx
movieRouter.post("/movieWithDirector/:directorId", async (req, res, next) => {
  // ... (error handling)

  // 1. Extract director ID from request parameter
  req.body.author = req.params.directorId;

  // 2. Create new movie with linked director ID
  const newMovie = new Movie(req.body);

  // 3. Save the new movie with director reference
  const savedMovie = await newMovie.save();

  // 4. Send successful response with saved movie
  return res.status(201).send(savedMovie);
});
```

## **Line-by-Line Explanation:**

**`req.body.author = req.params.directorId;`**: This line extracts the `directorId` from the request parameter and assigns it to a new property named `author` within the request body (`req.body`). This creates a reference between the movie and the director.

**`const newMovie = new Movie(req.body);`**: A new movie document is created using the Mongoose `Movie` model, and the request body (now containing the `author` property) is used to populate its fields.

**`const savedMovie = await newMovie.save();`**: The movie document is saved to the database using the `save` method. Since `author` references the director's ID, this establishes the one-to-many relationship.

**`return res.status(201).send(savedMovie);`**: Upon successful save, the response sends back the newly created movie document with its details.

## **Fetching Movies by Director (Many-to-One)**

## JavaScript

```jsx
movieRouter.get("/moviesByDirector/:directorId", async (req, res, next) => {
  // ... (error handling)

  // 1. Extract director ID from request parameter
  const directorId = req.params.directorId;

  // 2. Find movies with matching director ID
  const foundMovies = await Movie.find({ author: directorId });

  // 3. Send successful response with movies list
  return res.status(200).send(foundMovies);
});
```

## **Line-by-Line Explanation:**

**`const directorId = req.params.directorId;`**: Similar to the previous example, this line extracts the `directorId` from the request parameter.

**`const foundMovies = await Movie.find({ author: directorId });`**: The `Movie` model's `find` method is used to search for movies where the `author` field (referencing the director) matches the extracted `directorId`. This retrieves all movies associated with that particular director.

**`return res.status(200).send(foundMovies);`**: If movies are found, the response sends back a list of those movies associated with the director.