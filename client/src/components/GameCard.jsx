import React, { useEffect, useState } from "react";
import { AddToCart } from "../services/CartServices";
import { GetCart } from "../services/CartServices";
import { Link } from "react-router-dom";

const GameCard = ({id, title, image, price, rating, user, authenticated}) => {
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
      <Link to={`/game/details/${id}`} ><section className="img-wrapper"><img className="game-image" src={image} alt="" /></section></Link>
      <section className='hover-info'>
        <h3>{title}</h3>
        <p>USD ${price}  |  Rating: {rating}</p>
        {
          (user && authenticated) && <button onClick={() => { AddToCart(cart_item) }} className='add-button' >Add to Cart</button>
          }
      </section>
    </div>

  )
}

export default GameCard