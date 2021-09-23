import React, { useEffect, useState } from 'react'
import { UpdateReview, DeleteReview } from '../services/ReviewServices'
import { GetUser } from '../services/UserServices'

const ReviewCard = ({ review }) => {
  const [reviewerName, setReviewerName] = useState

  const getUserName = async () => {
    const reviewer = await GetUser(review.user_id)
    setReviewerName(reviewer.name)
  }

  useEffect(() => {
    getUserName()
  }, [])
  return (
    <div>
      <h2>{reviewerName}</h2>
      <p>{review.content}</p>
      <section className='hover-review'>
        
      </section>
    </div>
  )
}

export default ReviewCard