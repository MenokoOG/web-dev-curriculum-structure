# MongoDB Update Operators

## Overview

MongoDB provides a rich set of update operators that allow you to modify the data in your documents efficiently. These operators can be used to perform various operations such as incrementing values, adding or removing elements from arrays, and setting new values for fields. In the provided code, several MongoDB update operators are used to implement voting functionality for issues, specifically upvoting and downvoting. Below is an explanation of the code and a summary of some of the most common MongoDB update operators.

## Code Explanation

The provided code defines a Mongoose schema for issues, routes to handle upvoting, and a function to handle upvotes on the client side.

## Mongoose Schema

```jsx
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: String,
        required: true
    },
    upvotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    downvotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model("Issue", issueSchema);

```

This schema defines the structure of an issue document, including fields for title, description, image URL, user ID, username, and arrays to store user IDs of upvotes and downvotes.

## Upvote Route

```jsx
issueRouter.put('/upvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: { upvotes: req.auth._id },
                $pull: { downvotes: req.auth._id }
            },
            { new: true }
        );
        return res.status(201).send(updatedIssue);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

```

This route handles upvoting an issue. When a user upvotes an issue, the user's ID is added to the `upvotes` array using the `$addToSet` operator and removed from the `downvotes` array using the `$pull` operator. The `new: true` option ensures the updated document is returned.

## Client-Side Upvote Function

```jsx
async function handleUpvote(issueId) {
    try {
        const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`);
        console.log(res.data);
        setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue));
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
            };
        });
    } catch (error) {
        console.log(error);
    }
}

```

This function sends a PUT request to upvote an issue and updates the state with the new issue data. It ensures the local state reflects the updated issue after the server responds.

## Common MongoDB Update Operators

1. **$set**: Sets the value of a field in a document.
    
    ```jsx
    { $set: { "field": value } }
    
    ```
    
    Example: Set the status of a task to "completed".
    
    ```jsx
    { $set: { status: "completed" } }
    
    ```
    
2. **$unset**: Removes a field from a document.
    
    ```jsx
    { $unset: { "field": "" } }
    
    ```
    
    Example: Remove the `age` field from a document.
    
    ```jsx
    { $unset: { age: "" } }
    
    ```
    
3. **$inc**: Increments the value of a field by a specified amount.
    
    ```jsx
    { $inc: { "field": amount } }
    
    ```
    
    Example: Increment the `likes` field by 1.
    
    ```jsx
    { $inc: { likes: 1 } }
    
    ```
    
4. **$addToSet**: Adds elements to an array only if they do not already exist in the array.
    
    ```jsx
    { $addToSet: { "field": value } }
    
    ```
    
    Example: Add a tag to a `tags` array if it doesn't already exist.
    
    ```jsx
    { $addToSet: { tags: "mongodb" } }
    
    ```
    
5. **$pull**: Removes elements from an array that match a specified condition.
    
    ```jsx
    { $pull: { "field": value } }
    
    ```
    
    Example: Remove a tag from a `tags` array.
    
    ```jsx
    { $pull: { tags: "mongodb" } }
    
    ```
    
6. **$push**: Adds elements to an array.
    
    ```jsx
    { $push: { "field": value } }
    
    ```
    
    Example: Add a new comment to a `comments` array.
    
    ```jsx
    { $push: { comments: { text: "Nice post!" } } }
    
    ```
    
7. **$pop**: Removes the first or last element of an array.
    
    ```jsx
    { $pop: { "field": 1 } }  // Removes the last element
    { $pop: { "field": -1 } } // Removes the first element
    
    ```
    

These operators provide powerful and flexible ways to update documents in MongoDB, making it easy to implement features like voting, tagging, and other dynamic updates. The provided code example demonstrates how to use `$addToSet` and `$pull` to manage upvotes and downvotes in a voting system.