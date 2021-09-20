import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'


const Nav = ({ onChange, onSubmit, value }) => {
  let signedIn
  
  if (user) {
    signedIn = (
      <nav className='left-top-nav'>
        <h3>Welcome Gamer {user.name}!</h3>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink onClick={} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  }
  
  const notSignedIn = (
    <nav className='left-top-nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signin"><button>Sign In</button></NavLink>
      <NavLink to="/signup"><button>Sign Up</button></NavLink>
    </nav>
  )
  
  return (
    <header>
      <nav className='top-nav'>
        <section className='right-top-nav'>
          <NavLink className='logo' to='/'><img src="https://i.imgur.com/o5heXzws.png" alt="GameStart logo" /></NavLink>
        </section>

        {authenticated && user ? signedIn : notSignedIn}
      </nav>

      <nav className='bottom-nav'>
        <section className='right-bottom-nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/games/listings'>Games</NavLink>
          <NavLink to='/community'>Community</NavLink>
          <NavLink to='/about'>About</NavLink>
        </section>

        <section className='left-bottom-nav'> 
          <SearchBar onChange={onChange} onSubmit={onSubmit} value={value} />
        </section>
      </nav>

    </header>
  )
}

export default Nav