import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { CheckSession } from './services/UserServices'

import Nav from './components/Nav'

import Account from './pages/Account'
import Homepage from './pages/Homepage'
import GameDetails from './pages/GameDetails'
import GameListings from './pages/GameListings'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SearchResults from './pages/SearchResults'
import Cart from './pages/Cart'
import About from './pages/About'

function App() {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  // const checkToken = async () => {
  //   const session = await CheckSession()
  //   setUser(session)
  //   toggleAuthenticated(true)
  //   localStorage.setItem('authenticated', '1')
  // }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  function App() {
    return (
      <div className="App">
        <Nav />

        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search/results" component={SearchResults} />
            <Route exact path="/user/account" component={Account} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/games/listings" component={GameListings} />
            <Route exact path="/about" component={About} />

            <Route exact path="/game/details" component={GameDetails} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
