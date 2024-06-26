# Rock the Vote: Server Setup

You are tasked with building a full stack application that facilitates user authentication and allows users to post and vote on political issues. This assignment is one of the most challenging at V School. We recommend collaborating with fellow students or friends working on the project.

In this first assignment, you will set up the backend for your application. The goal is to create a robust server that includes essential models, routes, and error handling. Follow the instructions below to complete this assignment.

---

### Requirements

Your backend should include the following components:

### 1. Models

- **User**: Create a model for user data.
- **Issues**: Create a model for issues data.

### 2. Routes

- **User Routes**:
    - **Login**: Allow users to log in.
    - **Signup**: Allow new users to sign up.
- **Issues Routes (Protected with `express-jwt`)**:
    - **Get by User Logged In**: Allow users to fetch issues they have created.
    - **Add New Issue**: Allow users to add new issues.
    - **Get All Issues**: Fetch all issues
    - **Update Issue**: Update an existing issue
    - **Delete Issue**: Delete an existing issue

### 3. Error Handling

- Update the error handler to properly handle authentication errors.

---

### Suggestions

1. **One-to-Many Relationship**:
    - Establish a relationship where one entity (e.g., user) can be associated with multiple instances of another entity (e.g., issues). This allows for scenarios where a user can create multiple issues, but each issue is linked to only one user.

### Testing with Postman

- Use Postman to test your API endpoints. Make sure to:
    - Test user signup and login endpoints to ensure tokens are issued correctly.
    - Test protected routes by including the JWT in the Authorization header.
    - Verify that you can create, read, update, and delete issues.
    - Test the error handling by trying to access protected routes without a valid token and observing the error response.

---

### Summary

By following these guidelines, you will build a backend that includes user authentication, protected routes, and comprehensive error handling. Test each route to ensure everything is functioning correctly. Good luck with your "Rock the Vote" project!