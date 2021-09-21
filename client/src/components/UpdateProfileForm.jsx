import React, {useState} from 'react'
import {history} from 'react-router-dom'
import { UpdateUser } from '../services/UserServices '

const iState = { name: '', email: '', picture: '' }


const UpdateProfileForm = () => {
  const [formValues, setFormValues] = useState(iState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    UpdateUser(formValues)
    history.push('/signin')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="John Smith"
          value={formValues.name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="example@example.com"
          value={formValues.email}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="Picture URL">Picture URL</label>
        <input
          onChange={handleChange}
          name="picture"
          type="text"
          placeholder="https://i.imgur.com/tRxbS89m.jpg"
          value={formValues.picture}
        />
      </div>
      <button disabled={!formValues.email || !formValues.name || !formValues.picture} >Update and Sign In</button>
    </form>
  )
}

export default UpdateProfileForm