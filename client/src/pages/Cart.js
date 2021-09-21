import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import {DeleteCartItem, GetCart} from '../services/CartServices'

const Cart = ({user}) => {
  const [cartItems, setCartItems] = useState([])
  
  const handleCart = () => {
    let items = GetCart(user.id)

  }
  
  useEffect(() => {
    setCartItems(items)
  }, [])

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {cartItems.map(item => (
        <div className='cart-cont'>
          <CartItem key={item.id} {...item} />
          <button onClick={() => DeleteCartItem(item.id)}  className='delete-button'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart