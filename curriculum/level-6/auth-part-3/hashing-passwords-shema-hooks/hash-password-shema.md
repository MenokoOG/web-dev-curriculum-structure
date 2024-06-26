# Understanding bcrypt and User Password Hashing in Token-Based Authentication

In this video lesson, we delve into the concept of password hashing using bcrypt within the context of token-based authentication. This is an essential step to ensure that user passwords are securely stored, protecting them from potential data breaches.

## What is bcrypt?

bcrypt is a popular password hashing function designed to secure passwords. Instead of storing plain text passwords, which can be easily compromised if accessed by malicious actors, bcrypt converts passwords into a hashed format that is highly resistant to brute-force attacks. This makes it a crucial tool in safeguarding user data.

## The Role of bcrypt in User Authentication

In token-based authentication systems, user credentials (typically a username and password) are verified and, upon successful authentication, a token is issued. This token is then used for subsequent requests, eliminating the need to re-enter credentials. However, securely storing user passwords is a critical aspect of this process, which is where bcrypt comes into play.

## Breaking Down the Code

Let's examine the provided block of code, which is part of a Mongoose schema for a MongoDB database:

```jsx
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        try {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
        } catch (error) {
            return next(error);
        }
    }
});

```

Here's a step-by-step explanation:

1. **Hooking into the Save Operation**:
The `userSchema.pre('save', async function(next){...})` line sets up a pre-save middleware in Mongoose. This middleware runs just before a user document is saved to the database.
2. **Checking for Password Modification**:
The `if(user.isModified('password')){...}` condition checks if the password field has been modified. This is important because we only want to hash the password if it has been changed or set for the first time.
3. **Hashing the Password**:
Inside the `if` block, we use `bcrypt.hash(user.password, 10)` to hash the user's password. The `10` represents the salt rounds, which determine the computational cost of the hashing process. Higher values make the hashing more secure but also more time-consuming.
4. **Updating the Password**:
After hashing the password, we assign the hashed value back to `user.password`.
5. **Error Handling**:
The `try...catch` block ensures that any errors encountered during the hashing process are caught and passed to the next middleware using `next(error)`.

## Why Hash Passwords?

Storing plain text passwords is a significant security risk. If a database is compromised, attackers can easily access user passwords. By hashing passwords with bcrypt:

- **Security**: Even if the database is compromised, the attacker only gets access to hashed passwords, which are extremely difficult to reverse-engineer.
- **Salt**: bcrypt includes a salt (random data) in its hashing process, adding an extra layer of security by ensuring that even identical passwords will have different hashes.

In conclusion, integrating bcrypt into your user authentication flow is a fundamental practice for enhancing security. By hashing passwords before storing them, you protect user data and bolster your application's overall security posture.