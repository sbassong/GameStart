import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import {DeleteCartItem, GetCartItems} from '../services/CartServices'
import { GetOneGame } from "../services/GameServices";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [deleted, setDeleted] = useState({})
  const [gameItems, setGameItems] = useState([])

  console.log("this is cartItems", cartItems)
  console.log("this is gameItems", gameItems)

  const handleCart = async (userId) => {
    let items = await GetCartItems(userId)
    setCartItems(items)
  }
  
  const handleDeleteItem = async (itemId) => {
    await DeleteCartItem(itemId)
    setDeleted(itemId)
  }

  const findGameInfo = async () => {
    let games = cartItems.map(item => (
      GetOneGame(item.game_id)
      ))
      console.log("this is games", games)
    setGameItems(games)

  }

  useEffect(() => {
    handleCart(props.user.id)
    findGameInfo()
  }, [deleted])

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {gameItems.length > 0 && gameItems.map(item => (
        <div className='cart-cont'>
          <CartItem key={item.id} title={item.title} image={item.background_image} price={item.price}/>
          <button onClick={() => handleDeleteItem(item.id)}  className='delete-button'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart