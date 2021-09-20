import React from "react";
import GameCard from '../components/GameCard'

const GameListings = (props) => {

  return (
    <div className='listings'>
      <section className='filter-sidebar'>
        
      </section>

      <section className='games'>
        {props.games.map((game) => (
          <GameCard {...game}/>
        ))}
      </section>
      
    </div>
  )
}

export default GameListings