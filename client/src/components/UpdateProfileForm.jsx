import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { UpdateUser } from '../services/UserServices'

const iState = { name: '', email: '', image: '' }


const UpdateProfileForm = ({user}) => {
  const history = useHistory()
  const [formValues, setFormValues] = useState(iState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    UpdateUser(user.id, formValues)
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
        <label htmlFor="picture">Picture URL</label>
        <input
          onChange={handleChange}
          name="image"
          type="text"
          placeholder="https://i.imgur.com/tRxbS89m.jpg"
          value={formValues.image}
        />
      </div>
      <button disabled={(formValues.name || formValues.email || formValues.image) === ""} >Update and Sign In</button>
    </form>
  )
}

export default UpdateProfileForm