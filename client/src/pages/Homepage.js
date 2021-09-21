import React from "react";
import GameCard from "../components/GameCard";
import {GetPopularGames, GetRecentGames} from '../services/GameServices'

const Homepage = () => {
  let recentGames = GetRecentGames()
  let popularGames = GetPopularGames()

  return (
    <div>
      <banner className=''>
        <img src='' alt='' />
      </banner>

      <section>
        <section className='popular'>
          <h1>Top Rated Games:</h1>
          {/* {popularGames.map(game => (
            <GameCard key={game.id} {...game} />
          ))} */}
        </section>

        <section className='recent'>
          <h1>Recently Added Games:</h1>
          {/* {recentGames.map(game => (
            <GameCard key={game.id} {...game} />
          ))} */}
        </section>
      </section>
    </div>
  )
}

export default Homepage