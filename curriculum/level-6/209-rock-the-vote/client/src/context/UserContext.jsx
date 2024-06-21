/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ''
    };

    const [userState, setUserState] = useState(initState);
    const [allIssues, setAllIssues] = useState([]);
    const [allComments, setAllComments] = useState([]);

    // Authentication functions
    function signup(credentials) {
        axios.post("/api/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function login(credentials) {
        axios.post("/api/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: "",
            issues: []
        });
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }));
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }));
    }

    // Issue functions
    function getUserIssues() {
        userAxios.get("/api/main/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }));
            })
            .catch(err => console.log(err));
    }

    function addIssue(newIssue) {
        userAxios.post("/api/main/issue", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }));
            })
            .catch(err => console.log(err));
    }

    function getAllIssues() {
        userAxios.get('/api/main/issue')
            .then(res => setAllIssues(res.data))
            .catch(err => console.log(err));
    }

    // Comment functions
    function getAllComments() {
        userAxios.get("/api/main/comments")
            .then(res => setAllComments(res.data))
            .catch(err => console.log(err));
    }

    function addComment(id, comment) {
        userAxios.post(`/api/main/comments/${id}`, comment)
            .then(res => setAllComments(prevAllComments => [
                ...prevAllComments,
                res.data
            ]))
            .catch(err => console.log(err));
    }

    // Vote functions
    function upvoteIssue(issueId) {
        userAxios.put(`/api/main/issue/upvote/${issueId}`)
            .then(res => {
                setAllIssues(prevAllIssues => prevAllIssues.map(issue => issue._id === issueId ? res.data : issue));
                setUserState(prevState => ({
                    ...prevState,
                    issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
                }));
            })
            .catch(err => console.log(err));
    }

    function downvoteIssue(issueId) {
        userAxios.put(`/api/main/issue/downvote/${issueId}`)
            .then(res => {
                setAllIssues(prevAllIssues => prevAllIssues.map(issue => issue._id === issueId ? res.data : issue));
                setUserState(prevState => ({
                    ...prevState,
                    issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
                }));
            })
            .catch(err => console.log(err));
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                getUserIssues,
                getAllIssues,
                allIssues, 
                getAllComments,
                allComments,
                upvoteIssue,
                downvoteIssue,
                addComment
            }}>
            {props.children}
        </UserContext.Provider>
    );
}
