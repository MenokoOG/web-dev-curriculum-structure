import React, {useContext, useEffect} from 'react';
import {UserContext} from '../context/UserProvider';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

function Profile() {
    const { user, getUserIssues, getAllComments, issues } = useContext(UserContext)
useEffect(() => {
    getUserIssues()
    getAllComments()
}, [])

    return ( 
        <>
        <h1>Welcome @ {user.username}</h1>
        <IssueForm />
        < IssueList issues={issues} />
        </>
     );
}

export default Profile;