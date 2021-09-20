import React from "react";
import CartItem from "../components/CartItem";
import axios from 'axios'

const Cart = ({cartItems, toggleDeleted}) => {

  // const deleteItem = (id) => {
  //   axios.delete(`${BASE_URL}/cart/${id}`)
  //   toggleDeleted(true)
  // }

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {cartItems.map(item => (
        <div className='cart-cont'>
          <CartItem key={item.id} name={item.name} v />
          <button onClick={() => deleteItem(item.id)}  className='delete-button'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart