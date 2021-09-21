import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const { user, authenticated, component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  )
}

export default ProtectedRoute
