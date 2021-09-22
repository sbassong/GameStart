import React from 'react'
import GameCard from '../components/GameCard'

const SearchResults = ({searchResults, user}) => {
  return (
    <div>
      <h3>Search results:</h3>
      {searchResults.length > 0 && searchResults.map(searchResult => (
          <GameCard key={searchResult.id} id={searchResult.id} title={searchResult.title} image={searchResult.background_image} price={searchResult.price} rating={searchResult.rating} user={user}/>
        ))}
    </div>
  )
}

export default SearchResults