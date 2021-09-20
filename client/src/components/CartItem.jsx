import React from "react";

const CartItem = (props) => {
  const decrementQuantity = () => {}
  const incrementQuantity = () => {}

  return (
    <div className='item-card'>
      <section>
        <img src={props.background_image} alt="" />
        <p>{props.title}</p>
      </section>
      
      <section>
        <div><p>USD ${props.price}</p></div>
        <button onClick={decrementQuantity} >-</button>
        <input type="text" />
        <button onClick={incrementQuantity} >+</button>
      </section>
    </div>
  )
}

export default CartItem