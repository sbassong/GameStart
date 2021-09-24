import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'


const Nav = ({ handleLogOut, authenticated, user, setSearchResults }) => {
  let signedIn
  
  if (user) {
    signedIn = (
      <nav className='right-top-nav'>
        <h3>Welcome gamer {user.name}!</h3>
        <NavLink to="/user/account">Account</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  }
  
  const notSignedIn = (
    <nav className='right-top-nav'>
      <NavLink to="/signin"><button className='log-but'>Sign In</button></NavLink>
      <NavLink to="/signup"><button className='sign-but'>Sign Up</button></NavLink>
    </nav>
  )
  

  return (
    <header>
      <nav className='top-nav'>
        <section className='left-top-nav'>
          <NavLink className='logo' to='/'><img src="https://i.imgur.com/cNe1mtg.png?2" alt="GameStart logo" /></NavLink>
        </section>

        {authenticated && user ? signedIn : notSignedIn}
      </nav>

      <nav className='bottom-nav'>
        <section className='right-bottom-nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/games/listings'>Games</NavLink>
          <NavLink to='/about'>About</NavLink>
        </section>

        <section className='left-bottom-nav'> 
          <SearchBar setSearchResults={setSearchResults}/>
        </section>
      </nav>

    </header>
  )
}

export default Nav