# Rock the Vote: Frontend Development

In this phase of the project, you will build the frontend components to complement the backend you have set up. Your frontend application should integrate seamlessly with the backend API to provide user authentication, profile management, and issue handling functionality. Follow the instructions below to complete this assignment effectively.

---

### Requirements

Your frontend should include the following components:

### 1. Authentication

Implement user authentication functionalities including:

- **Login Form**: Allow users to log in.
- **Signup Form**: Allow new users to sign up.
- **Logout Functionality**: Implement a way for users to log out.

**Goal**: Reuse components where possible to maintain consistency and avoid code duplication.

### 2. Context Management

Utilize React Context to manage global state for:

- **User Authentication State**: Manage logged-in user details and authentication status.
- **API Requests**: Implement functions to interact with your backend API (`userAxios`) for login, signup, logout, and fetching user-specific data.

### 3. Profile Page

Create a profile page that includes:

- **New Issue Form**: Allow users to add new issues.
- **List of User's Issues**: Display a list of issues created by the logged-in user.

**Goal**: Reuse components across different pages (like the public page) to maintain consistency and improve maintainability.

### 4. Public Page

Implement a public page that includes:

- **List of All Issues**: Display a list of all issues created by all users.

**Goal**: Reuse components from the profile page where applicable to maintain consistency in design and functionality.