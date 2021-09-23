import React, { useState } from 'react'
import { CreateReview } from '../services/ReviewServices'

const SubmitReviewForm = ({user, game}) => {
  const [formValues, setFormValues] = useState({user_id: user.id, game_id: game.id, content: ''})

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateReview(formValues)
    alert('Thank you for posting your review!')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <div className='review-cont'>
      <form className='review-form' onSubmit={handleSubmit}>
        <input type="text" value={formValues.content} onChange={handleChange} name="content" placeholder='Please write review here'/>
        <button className='post-review'>Post Review</button>
      </form>
    </div>
  )
}

export default SubmitReviewForm