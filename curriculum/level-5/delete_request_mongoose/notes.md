## **Why are DELETE Requests Important?**

DELETE requests are essential for allowing clients to remove resources from your application's data store. This functionality is crucial for various use cases, including:

- Deleting user accounts
- Removing unwanted items from shopping carts or wishlist
- Deleting outdated blog posts or articles
- Managing user-generated content (e.g., comments, reviews)

Understanding DELETE requests empowers you to build dynamic web applications that allow users to manage and manipulate data within the system.

Mongoose Delete Request

```jsx
movieRouter.delete('/:movieId', async (req, res, next) => {
  try {
    // 1. Extract movie ID from request parameters
    const movieId = req.params.movieId;

    // 2. Find and delete movie using Mongoose
    const deletedMovie = await Movie.findOneAndDelete({ _id: movieId });

    // 3. Handle successful deletion (status 200)
    return res.status(200).send(`You have successfully deleted ${deletedMovie.title}`);
  } catch (error) {
    // 4. Handle errors (status 500)
    res.status(500);
    return next(error);
  }
});
```

## **Line-by-Line Explanation:**

```jsx
**movieRouter.delete('/:movieId', async (req, res, next) => { ... })**:
```

```jsx
This line defines a route handler for the DELETE HTTP method on the /movies/:movieId path using the Express router.
```

- The asynchronous function takes three arguments:
    - `req`: The incoming request object containing data from the client.
    - `res`: The response object used to send data back to the client.
    - `next`: A function for passing errors to middleware.

```jsx
**const movieId = req.params.movieId;**:
```

- This line extracts the `movieId` from the request parameters (`req.params`). Route parameters are defined using the colon (`:`) syntax in the route path.

```jsx
**const deletedMovie = await Movie.findOneAndDelete({ _id: movieId });**:
```

- This line uses Mongoose to find a single movie document with the matching `_id` (MongoDB document identifier) retrieved from the request parameter.
- The `findOneAndDelete` method performs the deletion and returns the deleted document if successful.

```jsx
**return res.status(200).send(You have successfully deleted ${deletedMovie.title});**:
```

- This block handles the successful deletion scenario:
    - `res.status(200)` sets the response status code to 200 (OK).
    - `res.send` sends a success message to the client, including the title of the deleted movie using string interpolation.

```jsx
**catch (error) { ... }**:
```

- This block handles any errors that might occur during the deletion process.
- `res.status(500)` sets the response status code to 500 (Internal Server Error).
- `return next(error)` passes the error object to the next middleware in the chain for further handling (e.g., logging).

## **Additional Notes:**

- Error handling is crucial for a robust application. Always implement proper error handling mechanisms to provide informative responses to the client in case of issues.
- You can customize the success and error messages to suit your specific application needs.
- Mongoose offers various methods for interacting with your database, including `create`, `update`, and `find`. Explore the Mongoose documentation for a comprehensive overview: https://mongoosejs.com/docs/