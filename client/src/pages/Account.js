import React, {useState} from "react";
import {DeleteUser} from '../services/UserServices'
import UpdatePasswordForm from "../components/UpdatePasswordForm";
import UpdateProfileForm from "../components/UpdateProfileForm";

const Account = (props) => {
  
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
      {props.user.image && <div><img src={props.user.image} alt=''/></div>}
      <p> User: {props.user.name}</p>
      <p>Email: {props.user.email}</p>
      <button onClick={showPasswordForm} >Update Password</button>
      <button onClick={showProfileForm}>Update User profile</button>
      <button onClick={() => {DeleteUser(props.user.id)}}>Delete Account</button>

      {passwordButton && <UpdatePasswordForm /> }
      {profileButton && <UpdateProfileForm /> }
      
    </div>
  )
}

export default Account