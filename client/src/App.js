import './styles/App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import { CheckSession } from './services/UserServices'

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
      {/* <Nav/> */}
      <main>
        <Switch>
          <Route exact path='/' component={}/>
          <Route exact path='/signin' component={}/>
          <Route exact path='/signup' component={}/>
          <Route exact path='/search/results' component={}/>
          <Route exact path='/user/account' component={}/>
          <Route exact path='/cart' component={}/>
          <Route exact path='/games/listings' component={}/>

          <Route exact path='/' component={}/>
          <Route exact path='/' component={}/>
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
