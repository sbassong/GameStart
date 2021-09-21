import React, { useState } from 'react'
import { history } from 'react-router-dom'
import { UpdatePassword } from '../services/UserServices '

const iState = { oldPassword: '', newPassword: '', c_newPassword: '' }


const UpdatePasswordForm = () => {
  const [formValues, setFormValues] = useState(iState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    UpdatePassword(formValues)
    history.push('/signin')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="oldPassword">Old Password</label>
        <input
          onChange={handleChange}
          name="oldPassword"
          type="text"
          placeholder="Enter old password"
          value={formValues.oldPassword}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="newPassword">New Password</label>
        <input
          onChange={handleChange}
          name="newPassword"
          type="text"
          placeholder="Enter new password here"
          value={formValues.newPassword}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="c_newPassword">Confirm New Password</label>
        <input
          onChange={handleChange}
          name="c_newPassword"
          type="text"
          placeholder="Confirm new password here"
          value={formValues.c_newPassword}
        />
      </div>
      <button disabled={!formValues.oldPassword || !formValues.c_newPassword || (!formValues.newPassword && formValues.c_newPassword === formValues.newPassword)} >Update and Sign In</button>
    </form>
  )
}

export default UpdatePasswordForm