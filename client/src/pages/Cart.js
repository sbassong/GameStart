import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import {DeleteCartItem, GetCartItems} from '../services/CartServices'

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([])
  console.log('this is cart items',cartItems)

  const handleCart = async (userId) => {
    let items = await GetCartItems(userId)
    setCartItems(items)
  }
  
  useEffect(() => {
    handleCart(props.user.id)
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