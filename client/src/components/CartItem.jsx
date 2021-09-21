import React from "react";

const CartItem = (props) => {
  let inputVal = 1
  const decrementQuantity = () => {
    if (inputVal <= 0) return inputVal 
    inputVal--
  }
  const incrementQuantity = () => inputVal++

  return (
    <div className='item-card'>
      <section>
        <img src={props.background_image} alt="" />
        <p>{props.title}</p>
      </section>
      
      <section>
        <div><p>USD ${props.price}</p></div>
        <button onClick={decrementQuantity} >-</button>
        <input type="text" value={`${inputVal}`} />
        <button onClick={incrementQuantity} >+</button>
      </section>
    </div>
  )
}

export default CartItem