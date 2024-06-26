# **Setting Up the Frontend**

## **Overview**

In this part of the course, we are setting up the frontend of our application. We'll be using a Vite app with React Router DOM to create a basic authentication form and a few routes. Here's how you can get started and what we've accomplished so far.

## **Steps to Set Up**

1. **Clone the Repository**:
    - First, you need to clone the frontend repository into the root folder of your project (the same place where you run `nodemon server.js`).
    - Use the following command to clone the repository:
        
        ```bash
        
        git clone https://github.com/VSchool/rock-the-vote-client.git
        
        ```
        
2. **Rename the Folder**:
    - The cloned repository will create a new folder called `rock-the-vote-client`. You can rename this folder to simply `client`.
    - **Option 1**: Rename using the command line:
        
        ```bash
        
        mv rock-the-vote-client client
        ```
        
    - **Option 2**: Rename manually within VS Code:
        - Open VS Code.
        - Locate the `rock-the-vote-client` folder in the file explorer.
        - Right-click on the folder and select "Rename".
        - Change the name to `client`.
3. **Vite App and React Router DOM**:
    - We have set up a Vite app to ensure a fast and optimized development environment.
    - React Router DOM is used to handle routing within our React application, providing navigation between different components and pages.
4. **Basic Authentication Form and Routes**:
    - The frontend includes a simple authentication form that allows users to sign up and log in.
    - We've also created routes for the profile and public pages, ensuring a basic structure for navigating between different parts of the app.
5. **Styling**:
    - The application currently has minimal styling to keep things simple and focused on functionality.
    - Feel free to customize the styles as needed to fit your preferences or requirements.

## **Key Takeaways**

- **Repository Setup**: By cloning and renaming the repository, you integrate the frontend with your existing backend setup seamlessly.
- **Vite and React Router DOM**: These tools help create a fast, efficient, and navigable React application.
- **Basic Functionality**: The provided authentication form and routes give you a starting point for further development and customization.

### **Next Steps**

After setting up the frontend, you can start the development server by navigating to the `client` folder and running:

```bash

rm -rf .git
npm install
npm run dev

```

This will start the Vite development server, and you can begin working on the frontend of your application. Feel free to enhance the functionality and styling as you progress.