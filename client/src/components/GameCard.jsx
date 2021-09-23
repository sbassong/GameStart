import React, { useEffect, useState } from "react";
import { AddToCart } from "../services/CartServices";
import { GetCart } from "../services/CartServices";
import { Link } from "react-router-dom";

const GameCard = ({id, title, image, price, rating, user}) => {
  const [cart, setCart] = useState({})

  const findCart = async () => {
    const res = await GetCart(user.id)
    setCart(res)
  }
  
  const cart_item = {
    game_id: id,
    cart_id: cart.id
  }

  useEffect(() => {
    if (user) findCart()
  }, [])

  return (
    <div className='game-card'>
      <Link to={`/game/details/${id}`} ><section><img src={image} alt="" /></section></Link>
      <section className='hover-info'>
        <h3>Title: {title}</h3>
        <p>USD ${price}</p>
        <p>Rating: {rating}</p>
        <button onClick={() => { AddToCart(cart_item) }} className='add-button' >Add to Cart</button>
      </section>
    </div>

  )
}

export default GameCard