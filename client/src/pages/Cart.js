import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import {DeleteCartItem, GetCartItems} from '../services/CartServices'

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [deleted, setDeleted] = useState({})

  const handleCart = async (userId) => {
    let items = await GetCartItems(userId)
    setCartItems(items)
  }
  
  const handleDeleteItem = async (itemId) => {
    await DeleteCartItem(itemId)
    setDeleted(itemId)
  }
  useEffect(() => {
    handleCart(props.user.id)
  }, [deleted])

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {cartItems.map(item => (
        <div className='cart-cont'>
          <CartItem key={item.id} {...item} />
          <button onClick={() => handleDeleteItem(item.id)}  className='delete-button'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart