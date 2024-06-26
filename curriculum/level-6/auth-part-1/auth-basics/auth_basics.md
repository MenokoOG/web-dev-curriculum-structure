# Level 6 Updates

### Authentication Part 1

- **Authentication Basics (Lesson)**
    
    ## Learning Objectives:
    
    - A student will be able to describe and discuss authentication as a concept.
    
    [Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6aef2f33-de49-4357-824c-927199bca931/baf65d10-0088-4357-95f8-dbd4d4e3215d/Untitled.mp4)
    
    # Authentication Basics
    
    ## **What is Authentication?**
    
    - The process of verifying a user's identity to grant access to specific functionalities within an application.
    - Imagine entering a club (application) with a valid ID (credentials) checked by a bouncer (authentication system).
    
    ## **Why is Authentication Important?**
    
    - **Security:** Prevents unauthorized access to user data and protects sensitive information.
    - **Usability:** Ensures users can access their own data, features, and personalize their experience.
    
    ## **Types of Authentication:**
    
    - Focus on token-based authentication in this lesson. Upcoming lessons will cover other types.
        - Session/cookie-based auth
        - Token-based auth (covered here)
        - OAuth (covered in upcoming lessons)
    
    ## **Token-based Authentication (Simplified):**
    
    - User logs in (username/password sent to server).
    - Server validates credentials against user data in the database.
    - Successful login: Server creates a unique token (like an access card).
    - Token sent back to user (saved in sessionStorage or localStorage).
    - Client app sends the token with every request to the server for protected resources.
    - Server checks the token for validity before granting access.
    - Valid token: User receives requested content.
    - Invalid token: User receives authorization error.
    - Logout: Remove token from storage (like taking away an access card).
    
    ## **Benefits of Token-based Authentication (Optional):**
    
    - Secure (avoids sending passwords back and forth).
    - Scalable (avoids session management on server).
    - Flexible (tokens can be stateless or store user info).