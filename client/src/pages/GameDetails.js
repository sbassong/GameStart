import React, {useEffect, useState} from "react";
import { AddToCart, GetCart } from "../services/CartServices";
import { GetReviewsByGameId } from "../services/ReviewServices";
import ReviewCard from "../components/ReviewCard";
import SubmitReviewForm from "../components/SubmitReviewForm";

const GameDetails = ({game, user}) => {
  const [cart, setCart] = useState({})
  const [gameReviews, setGameReviews] = useState([])
  const [reviewButton, toggleReviewButton] = useState(false)

  const showReviewForm = () => {
    reviewButton ? toggleReviewButton(false) : toggleReviewButton(true)
  }

  const findCart = async () => {
    const res = await GetCart(user.id)
    setCart(res)
  }

  const getReviews = async () => {
    const reviews = await GetReviewsByGameId(game.id)
    setGameReviews(reviews)
  }
  
  const cart_item = {
    game_id: game.id,
    cart_id: cart.id
  }

  const reviewsExist = (
    <h2>Reviews:</h2>
  )
  useEffect(() => {
    if (user) findCart()
    getReviews()
  }, [])

  return (
    <div>
      <section className='top-half'>
        <div><img src={game.background_image} alt="" /></div>
      
        <section>
          <h1>{game.title}</h1>
          <p>Rating: {game.rating}</p>
          <p>USD ${game.price}</p>
          <p>Platform: {game.platform}</p>
          <p>Description: {game.description}</p>
          <button className='add-cart' onClick={() => { AddToCart(cart_item) }}>Add to Cart</button>
          <button className='show-review-form' onClick={showReviewForm}>Post Review</button>
          {reviewButton && <SubmitReviewForm user={user} game={game}/> }
        </section>
      </section>

      <section className='reviews-cont'>
        {gameReviews.length > 0 && reviewsExist}
        {gameReviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
      
    </div>
  )
}

export default GameDetails