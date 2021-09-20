import React from "react";

const GameCard = (props) => {

  return (
    <div className='game-card'>
      <section><img src={props.background_image} alt="" /></section>
      <section className='hover-info'>
        <p>{props.title}</p>
        <p>USD ${props.price}</p>
        <p>{props.rating}</p>
      </section>
    </div>

  )
}

export default GameCard