## Updating a Document in Mongoose with Express

In this section, we will explore how to update a document in a MongoDB collection using Mongoose within an Express application. We'll also briefly compare the `findOneAndUpdate` and `findByIdAndUpdate` methods.

### Code Snippet

```jsx
movieRouter.put('/:movieId', async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            req.body,
            { new: true } // Telling the database we want the newest version returned
        )
        return res.status(201).send(updatedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

```

### Explanation

### 1. Route Definition and Parameters

- **Route Definition**: `movieRouter.put('/:movieId', async (req, res, next) => { ... })` sets up a PUT route to update a specific movie document. The `:movieId` part of the URL is a route parameter representing the ID of the movie to be updated.
- **Async Function**: The callback function is marked as `async`, allowing the use of `await` for handling asynchronous operations.

### 2. Extracting Route Parameters

- **`movieId`**: The ID of the movie to be updated is extracted from the route parameters using `req.params.movieId`. This ID is used to identify which movie document to update in the database.

### 3. Performing the Update with `await`

- **`findByIdAndUpdate` Method**: The `findByIdAndUpdate` method is used to find a movie by its ID and update it with the new data provided in `req.body`.
    - **First Argument (`movieId`)**: The ID of the movie to be updated.
    - **Second Argument (`req.body`)**: The new data to update the movie with.
    - **Third Argument (`{ new: true }`)**: An options object specifying that the method should return the updated document (`new: true`).

### 4. Error Handling with `try/catch`

- **Try Block**: The code that might throw an error, such as the Mongoose update operation, is enclosed in the `try` block.
- **Catch Block**: If an error occurs, the `catch` block is executed. The error object (`error`) provides details about the failure.
- **Error Response**: In case of an error, the server responds with a 500 status code (`res.status(500)`) and passes the error to the next middleware using `next(error)` for further handling.

### 5. Sending the Response

- **Successful Update**: If the update operation is successful, the server responds with a 201 status code (`res.status(201)`) and sends the updated movie document (`updatedMovie`) back to the client.

### `findOneAndUpdate` vs. `findByIdAndUpdate`

- **`findOneAndUpdate`**:
    - Updates the first document that matches the specified filter.
    - Requires a filter object to identify the document to be updated.
    - Example: `Movie.findOneAndUpdate({ title: 'Inception' }, req.body, { new: true })`
    - Useful when you need to update a document based on a field other than its `_id`.
- **`findByIdAndUpdate`**:
    - Specifically finds a document by its `_id` and updates it.
    - Directly takes the document ID as the first argument, simplifying the query.
    - Example: `Movie.findByIdAndUpdate(movieId, req.body, { new: true })`
    - Preferred when you have the document's `_id` and want to ensure you're updating the correct document.

### Summary

This code demonstrates how to update a document in a MongoDB collection using Mongoose in an Express application:

- **Route Parameters**: Extracting the movie ID from the request URL.
- **Mongoose Query**: Using `findByIdAndUpdate` to update the movie document and return the updated version.
- **Async/Await**: Managing asynchronous database operations with `async` and `await`.
- **Try/Catch**: Handling potential errors gracefully to ensure robust error management.

By understanding this example, you can effectively perform update operations on MongoDB documents using Mongoose, ensuring your Express applications are both powerful and reliable.