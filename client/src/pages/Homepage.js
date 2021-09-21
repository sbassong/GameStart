import React from "react";
import GameCard from "../components/GameCard";

const Homepage = () => {

  let popularGames
  let recentGames

  return (
    <div>
      <banner className=''>
        <img src='' alt='' />
      </banner>

      <section>
        <section className='popular'>
          <h1>Popular Games:</h1>
          {recentGames.map((game) => (
            <GameCard {...game} />
          ))}
        </section>

        <section className='recent'>
          <h1>Recently Added Games:</h1>
          {popularGames.map((game) => (
            <GameCard {...game} />
          ))}
        </section>
      </section>
    </div>
  )
}

export default Homepage