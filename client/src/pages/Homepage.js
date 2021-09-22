import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import {GetPopularGames, GetRecentGames} from '../services/GameServices'

const Homepage = ({user}) => {
  const [recentGames, setRecentGames] = useState([])
  const [popularGames, setPopularGames] = useState([])

  const showRecentGames = async () => {
    const res = await GetRecentGames()
    setRecentGames(res)
  } 

  const showPopularGames = async () => {
    const res = await GetPopularGames()
    setPopularGames(res)
  } 

  useEffect(() => {
    showRecentGames()
    showPopularGames()
  }, [])

  return (
    <div>
      <banner className=''>
        <img src='' alt='' />
      </banner>

      <section>
        <section className='popular'>
          <h1>Top Rated Games:</h1>
          {popularGames && popularGames.map(game => (
            <GameCard key={game.id} id={game.id} title={game.title} image={game.background_image} price={game.price} rating={game.rating} user={user} />
          ))}
        </section>

        <section className='recent'>
          <h1>Recently Added Games:</h1>
          {recentGames && recentGames.map(game => (
            <GameCard key={game.id} id={game.id} title={game.title} image={game.background_image} price={game.price} rating={game.rating} user={user} />
          ))}
        </section>
      </section>
    </div>
  )
}

export default Homepage