# **User Login Endpoint**

The `/login` endpoint is a crucial part of the authentication system of our application. It handles the login process for existing users, allowing them to authenticate and gain access to the system.

## **How it Works:**

1. **User Verification:** Upon receiving a POST request to `/login`, the server first checks if the provided username exists. This is done by querying the database to find a user document with the provided username. If a user with the given username does not exist, the server responds with a status code of 404 (Not Found) and an error message indicating that the username does not exist.
2. **Password Verification:** If the username exists, the server proceeds to verify the password provided in the request body. This is done by comparing the hashed password stored in the database with the hashed version of the password provided. If the passwords do not match, the server responds with a status code of 401 (Unauthorized) and an error message indicating that the password is incorrect.
3. **Token Generation:** After successfully verifying the user's credentials, the server generates a JSON Web Token (JWT) to authenticate the user. This token contains the user's information and is signed using a secret key stored in the environment variables. The JWT serves as a means of authenticating the user in subsequent requests without the need for re-entering credentials.
4. **Response:** Finally, the server responds with a status code of 200 (OK) along with a JSON object containing the authenticated user's information and the generated JWT token. This allows the client to obtain the necessary credentials for further authentication and access to protected resources.

## **Error Handling:**

In the event of an unexpected error during the login process, such as a database connection error or an internal server issue, the server responds with a status code of 500 (Internal Server Error). This informs the client that something went wrong on the server side and prompts them to try again later.

## **Key Takeaway:**

The `/login` endpoint serves as the entry point for existing users to authenticate with our application. By following a series of steps, including user verification, password verification, token generation, and response delivery, the endpoint ensures a smooth and secure login process for our users.