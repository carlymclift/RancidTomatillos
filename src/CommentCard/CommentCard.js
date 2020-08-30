import React from 'react'
import './CommentCard.css'

const CommentCard = ( {comment, author, postedComment} ) => {
    return (
    <>
      <div className="CommentCards">
        <p><span role="img" aria-label="User Emoji">👤</span> {author} wrote:</p>
        <p>{comment}</p>
      </div>
    </>
  )
}

export default CommentCard