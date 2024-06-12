## Searching a Database with Queries and Parameters in Mongoose with Express

In this section, we will explore how to search a MongoDB collection using query parameters with Mongoose in an Express application.

### Code Snippet

```jsx
movieRouter.get('/genre', async (req, res, next) => {
    try {
        const genre = req.query.genre
        const foundMovies = await Movie.find({ genre })
        return res.status(200).send(foundMovies)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

```

### Explanation

### 1. Route Definition and Query Parameters

- **Route Definition**: `movieRouter.get('/genre', async (req, res, next) => { ... })` sets up a GET route for searching movies by genre. The endpoint `/genre` is used for this purpose.
- **Async Function**: The callback function is marked as `async`, allowing the use of `await` to handle asynchronous operations.

### 2. Extracting Query Parameters

- **`req.query.genre`**: The genre parameter is extracted from the query string of the request URL using `req.query.genre`. This parameter is used to filter the movies based on their genre.

### 3. Performing the Search with `await`

- **`Movie.find({ genre })`**: This Mongoose query searches for all movie documents where the genre matches the provided genre parameter.
    - **Filter Object (`{ genre }`)**: The filter object specifies the criteria for the search. Here, it filters movies based on the genre.
    - **`await` Keyword**: The `await` keyword pauses the function's execution until the promise returned by `Movie.find` is resolved. The result, which is an array of movies matching the genre, is stored in `foundMovies`.

### 4. Error Handling with `try/catch`

- **Try Block**: The code that might throw an error, such as the Mongoose query, is enclosed in the `try` block.
- **Catch Block**: If an error occurs, the `catch` block is executed. The error object (`error`) provides details about the failure.
- **Error Response**: In case of an error, the server responds with a 500 status code (`res.status(500)`) and passes the error to the next middleware using `next(error)` for further handling.

### 5. Sending the Response

- **Successful Search**: If the search operation is successful, the server responds with a 200 status code (`res.status(200)`) and sends the array of found movies (`foundMovies`) back to the client.

### Summary

This code demonstrates how to search a MongoDB collection using query parameters with Mongoose in an Express application:

- **Route Parameters**: Extracting query parameters from the request URL.
- **Mongoose Query**: Using `Movie.find` to search for documents that match the query criteria.
- **Async/Await**: Managing asynchronous database operations with `async` and `await`.
- **Try/Catch**: Handling potential errors gracefully to ensure robust error management.

By understanding this example, you can effectively perform search operations on MongoDB documents using Mongoose, ensuring your Express applications can handle dynamic queries and provide accurate results to the client.