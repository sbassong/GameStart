import React from 'react'
import swal from '@sweetalert/with-react'
import {DeleteReview } from '../services/ReviewServices'

const ReviewCard = ({review}) => {

  const handleDeleteReview = async () => {
    await DeleteReview(review.id)
    swal("Review successfully deleted!")
      .then(() => { window.location.reload() })
  }

  return (
    <div className='review-card'>
      <p><h4>Reviewer:</h4>{review.User.name}</p>
      <p>{review.content}</p>

      {(review.User.id === review.user_id) && <section className='hover-review'>
        <button className='delete-review' onClick={handleDeleteReview}>Delete Review</button>
      </section>}
    </div>
  )
}

export default ReviewCard