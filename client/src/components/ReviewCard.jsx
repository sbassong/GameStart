import React from 'react'

const Review = ({ user, comment }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{comment.content}</p>
    </div>
  )
}

export default Review