import React, {useState} from "react";
import {DeleteUser} from '../services/UserServices '
import UpdatePasswordForm from "../components/UpdatePasswordForm";
import UpdateProfileForm from "../components/UpdateProfileForm";

const Account = ({user, authenticated}) => {
  const [passwordButton, togglePassword] = useState(false)
  const [profileButton, toggleProfile] = useState(false)

  const showPasswordForm = () => {
    passwordButton ? togglePassword(false) : togglePassword(true)
  }

  const showProfileForm = () => {
    profileButton ? toggleProfile(false) : toggleProfile(true)
  }

  return (
    <div>
      <div><img src={user.picture} alt=''/></div>
      <p> User: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={showPasswordForm} >Update Password</button>
      <button onClick={showProfileForm}>Update User profile</button>
      <button onClick={() => {DeleteUser(user.id)}}>Delete Account</button>

      {passwordButton && <UpdatePasswordForm /> }
      {profileButton && <UpdateProfileForm /> }
      
    </div>
  )
}

export default Account