import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CheckSession } from './services/UserServices'

import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute';

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
  const [authenticated, toggleAuthenticated] = useState(false || localStorage.getItem('authenticated'))
  const [user, setUser] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav authenticated={authenticated} user={user} handleLogOut={handleLogOut} setSearchResults={setSearchResults} />
      
      <main>
        <Switch>
          <Route exact path='/' component={() => <Homepage user={user}/>}  />
          <Route exact path='/signin' component={(props) => (<SignIn {...props} setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>)} />
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/search/results' component={() => <SearchResults searchResults={searchResults} user={user}/>}  />
          <ProtectedRoute exact path='/user/account' component={Account} authenticated={authenticated} user={user} />
          <ProtectedRoute exact path='/cart' component={Cart} authenticated={authenticated} user={user} />
          <Route exact path='/games/listings' component={() => <GameListings user={user} />} />
          <Route exact path='/about' component={About}/>

          <Route exact path="/game/details" component={GameDetails} />
          </Switch>
        </main>
    </div>
  )
}

export default App
