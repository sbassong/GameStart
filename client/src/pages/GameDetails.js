import React, {useEffect, useState} from "react";
import { AddToCart, GetCart } from "../services/CartServices";

const GameDetails = ({game, user}) => {
  const [cart, setCart] = useState({})

  const findCart = async () => {
    const res = await GetCart(user.id)
    setCart(res)
  }
  
  const cart_item = {
    game_id: game.id,
    cart_id: cart.id
  }

  useEffect(() => {
    if (user) findCart()
  }, [])

  return (
    <div>
      <section><img src={game.background_image} alt="" /></section>
      <section>
        <h1>{game.title}</h1>
        <p>Rating: {game.rating}</p>
        <p>USD ${game.price}</p>
        <p>Platform: {game.platform}</p>
        <p>Description: {game.description}</p>
        <button className='add-button' onClick={() => { AddToCart(cart_item) }}>Add to Cart</button> 
      </section>
    </div>
  )
}

export default GameDetails