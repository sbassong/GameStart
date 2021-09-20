import React from 'react'
import GameCard from '../components/GameCard'

const SearchResults = ({searchResults}) => {
  return (
    <div>
      <h3>Search results:</h3>
      {searchResults.length > 0 && searchResults.map(searchResult => (
          <GameCard key={searchResult.id} id={searchResult.id} name={searchResult.name} image={searchResult.background_image}/>
        ))}
    </div>
  )
}

export default SearchResults