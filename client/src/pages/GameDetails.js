import React from "react";

const GameDetails = (props) => {

  return (
    <div>
      <section><img src={props.background_image} alt="" /></section>
      <section>
        <h1>{props.title}</h1>
        <p>{props.rating}</p>
        <p>{props.price}</p>
        <p>{props.platform}</p>
        <p>{props.description}</p>
        <button>Add to Cart</button>
      </section>
    </div>
  )
}

export default GameDetails