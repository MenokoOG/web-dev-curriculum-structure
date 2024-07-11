import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;

})


export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allIssues, setAllIssues] = useState([]);
    const [allComments, setAllComments] = useState([]);


    // Authentication functions
    async function signup(creds) {
        try {
            const res = await axios.post("/api/auth/signup", creds)
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user: user,
                token: token
            }))
            console.log(res.data)
        } catch (error) {
            console.log(error)

        }
    }

    async function login(creds) {
        try {
            const res = await axios.post("/api/auth/login", creds)
            const { user, token } = res.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user: user,
                token: token
            }))
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function logout() {
        try {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: {},
                    token: ""

                }
            })

        } catch (error) {
            console.log(error)

        }
    }

    // function handleAuthErr(errMsg) {
    //     setUserState(prevUserState => ({
    //         ...prevUserState,
    //         errMsg
    //     }));
    // }

    // function resetAuthErr() {
    //     setUserState(prevUserState => ({
    //         ...prevUserState,
    //         errMsg: ''
    //     }));
    // }


    // Issue functions
    async function getUserIssues() {
        try {
            const res = await userAxios.get("/api/main/issues/user")
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        } catch (error) {
            console.log(error)
        }

    }

    async function addIssue(newIssue) {
        try {
            // Send a POST request to the backend API endpoint '/api/main/issues' with the new issue data
            const res = await userAxios.post('/api/main/issues', newIssue);

            // Update the user state with the newly added issue
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: [...prevState.issues, res.data] // Append the new issue to the existing issues array
                }
            });
        } catch (error) {
            console.log(error); // Log any errors that occur during the request
        }
    }

    async function getAllIssues() {
        try {
            const res = await userAxios.get('/api/main/issue');
            setAllIssues(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    // Comment functions
async function getAllComments() {
    try {
        const res = await userAxios.get("/api/main/comments");
        setAllComments(res.data);
    } catch (err) {
        console.log(err);
    }
}

async function addComment(id, comment) {
    try {
        const res = await userAxios.post(`/api/main/comments/${id}`, comment);
        setAllComments(prevAllComments => [
            ...prevAllComments,
            res.data
        ]);
    } catch (err) {
        console.log(err);
    }
}

// // Vote functions
// async function upvoteIssue(issueId) {
//     try {
//         const res = await userAxios.put(`/api/main/issue/upvote/${issueId}`);
//         setAllIssues(prevAllIssues => prevAllIssues.map(issue => issue._id === issueId ? res.data : issue));
//         setUserState(prevState => ({
//             ...prevState,
//             issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
//         }));
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function downvoteIssue(issueId) {
//     try {
//         const res = await userAxios.put(`/api/main/issue/downvote/${issueId}`);
//         setAllIssues(prevAllIssues => prevAllIssues.map(issue => issue._id === issueId ? res.data : issue));
//         setUserState(prevState => ({
//             ...prevState,
//             issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
//         }));
//     } catch (err) {
//         console.log(err);
//     }
// }



    return (
        <UserContext.Provider value={{ ...userState, signup, login, logout, getUserIssues, addIssue, getAllComments, addComment, getAllIssues, allComments, allIssues}}>
            {props.children}
        </UserContext.Provider>
    )
}