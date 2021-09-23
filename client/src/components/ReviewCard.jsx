import React, { useEffect, useState } from 'react'
import { UpdateReview, DeleteReview } from '../services/ReviewServices'

const ReviewCard = ({ review }) => {
  return (
    <div className='review-card'>
      <p><h4>Reviewer:</h4>{review.User.name}</p>
      <p>{review.content}</p>
      <section className='hover-review'>

      </section>
    </div>
  )
}

export default ReviewCard