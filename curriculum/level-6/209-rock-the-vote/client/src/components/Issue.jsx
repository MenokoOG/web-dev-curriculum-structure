import { useContext } from 'react'
import moment from 'moment'
import CommentContainer from './CommentContainer'
import { UserContext } from '../context/UserContext'

export default function Issue(props) {
  const { title, description, _id, username, createdAt, likedUsers, dislikedUsers } = props
  
  const timeStamp = moment(createdAt).fromNow()
  const{upvoteIssue, downvoteIssue} = useContext(UserContext)
  return (
    <div className="todo">

      <h3>Issue posted by: {username}</h3>
      <h1>Title: {title}</h1>
      <h3>Description: {description}</h3>
      <p>{timeStamp}</p>
      <div>
        <p>Upvotes: {likedUsers.length}</p>
        <button onClick={() => upvoteIssue(_id)}>Upvote</button>
      </div>

      <div>
        <p>Downvotes: {dislikedUsers.length} </p>
        <button onClick={() => downvoteIssue(_id)}>Downvote</button>
      </div>
      <CommentContainer issueId = {_id}/>
    </div>
  )
}