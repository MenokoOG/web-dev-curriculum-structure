# Rock the Vote: Project Completion Instructions

Congratulations on reaching the final phase of the Rock the Vote project! By now, you should have implemented most parts of the application following the lessons. In this phase, you will focus on completing the comment functionality and ensuring efficient data retrieval. Follow these instructions to finish the project effectively.

---

## Backend Requirements

### Comment Model and Routes

1. **Comment Model**:
    - Create a Comment model with fields for `text`, `issueId`, and `userId`.
    - Ensure each comment is associated with a specific issue and user.
2. **Comment Routes**:
    - Implement routes to create, read, update, and delete comments.
    - Protect these routes to ensure only authenticated users can perform CRUD operations on comments.

### Integration with Existing Features

1. **Ensure Authentication**:
    - Use JWT to authenticate users when creating, updating, or deleting comments.
    - Verify that only the user who created a comment can edit or delete it.

---

## Frontend Requirements

### Comment Functionality

1. **Implement Comment Form**:
    - Create a form component for users to add new comments to issues.
    - Include validation to ensure the comment text is not empty.
2. **Display Comments**:
    - Fetch all comments initially from the backend when loading the issue detail page.
    - Filter and display comments associated with the selected issue on the issue detail page.

### Update Existing Pages

1. **Issue Detail Page**:
    - Modify the issue detail page to display existing comments and the comment form.
    - Implement functionality to fetch all comments and then filter them based on the selected issue.
2. **Ensure Consistent Design and User Experience**:
    - Ensure that the comment form and comment display are integrated seamlessly with existing pages (public page and profile page).

---

## Project Completion

1. **Testing and Validation**:
    - Test the complete application to ensure all features work as expected.
    - Validate that users can securely log in, create issues, vote on issues, leave comments, and manage their own content.
2. **Documentation**:
    - Update documentation to include the new comment functionality.
    - Ensure that all routes, components, and functionalities are well-documented for future reference.

---

By following these instructions, you will complete the Rock the Vote project with comprehensive comment functionality and efficient data handling. This final phase integrates seamlessly with the existing application structure you have built throughout the lessons. Ensure to test thoroughly and document your work for clarity and future maintenance.

### Hinting Questions

- **Data Retrieval**: How can you optimize fetching and displaying comments to avoid multiple requests?
- **Filtering Approach**: What approach can you use to filter comments based on the selected issue without querying the server repeatedly?
- **Frontend Efficiency**: How can you ensure efficient data handling in the frontend while displaying comments on the issue detail page?

## Rock the Vote: Project Requirements

Below is a consolidated list of all the requirements for the Rock the Vote project. Ensure that you have implemented or addressed each item to complete the project successfully.

---

### Backend Requirements

1. **User Management**:
    - User model with fields for `username` and `password`.
    - Passwords hashed using bcrypt before saving to the database.
    - Method to remove passwords from user objects before sending them to the client.
    - Routes for user signup and login, using JWT for authentication.
2. **Issue Management**:
    - Issue model.
    - Routes to create, read, update, and delete issues.
    - Issues sorted by upvotes and downvotes.
    - Users can edit and delete their own issues.
    - Limit users to one upvote and one downvote per issue.
3. **Comment Management**:
    - Comment model with fields for `text`, `issueId`, and `userId`.
    - Routes to create and read.
    - Comments displayed on issue detail pages.
4. **Security and Access Control**:
    - Protection of issue and comment routes to ensure only authenticated users can access and manage them.
    - Validation that only the creator of an issue or comment can edit or delete it.

---

### Frontend Requirements

1. **Authentication**:
    - Login, signup, and logout functionality.
    - Context management for user authentication state.
    - Automatic routing on login and logout.
    - Protected routes based on authentication status.
2. **Pages and Navigation**:
    - Public page displaying all issues sorted by votes.
    - Profile page displaying issues created by the logged-in user.
    - Issue detail page displaying comments and allowing users to add comments.
3. **Issue Management**:
    - Form for users to create new issues.
    - Voting buttons (upvote and downvote) on issues.
    - Sorting issues by vote count.
    - Limit users to one upvote and one downvote per issue.
    - Edit and delete functionality for issues by their creators.
4. **Comment Functionality**:
    - Form for users to add comments to issues.
    - Display of comments on issue detail pages.