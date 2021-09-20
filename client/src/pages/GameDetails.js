import React from "react";

const GameDetails = (props) => {

  return (
    <div>
      <section><img src={props.background_image} alt="" /></section>
      <section>
        <h1>{props.title}</h1>
        <p>Rating: {props.rating}</p>
        <p>USD ${props.price}</p>
        <p>Platform: {props.platform}</p>
        <p>Description: {props.description}</p>
        <button onClick={} className='add-button'>Add to Cart</button>
      </section>
    </div>
  )
}

export default GameDetails