import React, { useState } from 'react'
import { CreateReview } from '../services/ReviewServices'
import swal from '@sweetalert/with-react'

const SubmitReviewForm = ({user, game}) => {
  const [formValues, setFormValues] = useState({user_id: user.id, game_id: game.id, content: ''})

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateReview(formValues)
    swal("Thank you for review!")
      .then(() => { window.location.reload() })
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