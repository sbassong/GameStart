import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const { user, authenticated, component: Component, ...rest } = props
  console.log('this is auth', authenticated)
  console.log('this is user', user)
  console.log('this is props in protected', props)
  return (
    <Route
      {...rest}
      render={(props) =>
        // user && authenticated ? <Component {...props} /> : <Redirect to="/signin" />
        user && authenticated ? <Component user={user} authenticated={authenticated} {...props} /> : <Redirect to="/signin" />
      }
    />
  )
}

export default ProtectedRoute
