import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PropTypes from 'prop-types';

function CommentList({ issueId }) {
    const { allComments = [] } = useContext(UserContext) || {};
    const filteredComments = allComments.filter(comment => comment.issue === issueId);

    return (
        <div>
            {filteredComments.map(comment => (
                <React.Fragment key={comment.id}>
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                </React.Fragment>
            ))}
        </div>
    );
}

CommentList.propTypes = {
    issueId: PropTypes.string.isRequired,
};

export default CommentList;
