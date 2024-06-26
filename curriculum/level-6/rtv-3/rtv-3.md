# Rock the Vote: Advanced Features and Final Touches

In this final phase of the project, you will enhance the functionality of your application by integrating additional features and implementing advanced techniques for better user experience and security. This part includes backend updates, frontend enhancements, and voting functionality. Follow the instructions below to complete this assignment effectively.

---

## Backend Enhancements

### Updated User Model

1. **Password Hashing**:
    - Use bcrypt to hash user passwords before saving them to the database. This ensures that user passwords are securely stored.
2. **Password Removal**:
    - Implement a method to remove the password from user objects before sending them to the client. This prevents the user's password from being exposed.

### Updated Login and Signup Routes

1. **Signup Route**:
    - Use bcrypt to hash the user's password before saving it to the database.
    - Ensure the user's password is removed from the user object before creating a token and sending the user data back to the client.
2. **Login Route**:
    - Verify the user's password using bcrypt.
    - Ensure the user's password is removed from the user object before creating a token and sending the user data back to the client.

---

## Frontend Enhancements

### Conditional Rendering

1. **Implement Conditional Rendering**:
    - Display different content based on whether a user is logged in.
    - Check for the presence of a token to determine if a user is authenticated.

### Protected Routes

1. **Create Protected Routes**:
    - Use React Router to restrict access to certain pages based on whether the user is authenticated.
    - Redirect users who are not logged in to the login page.

---

## Voting Functionality

### Upvotes and Downvotes

1. **Implement Voting Features**:
    - Add buttons for upvoting and downvoting issues in your issue components.
    - Send requests to the backend to update the vote count for issues when users click the upvote or downvote buttons.
    - Update the frontend to display the new vote count after a vote is cast.
    - Ensure issues are displayed sorted by the number of upvotes in descending order.

---

By following these instructions, you will successfully complete the third part of the Rock the Vote project. Your application will be secure, user-friendly, and fully functional with advanced features like conditional rendering, protected routes, and voting capabilities.