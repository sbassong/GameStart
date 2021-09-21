import React from 'react'
import GameCard from '../components/GameCard'

const SearchResults = ({searchResults}) => {
  return (
    <div>
      <h3>Search results:</h3>
      {searchResults.length > 0 && searchResults.map(searchResult => (
          <GameCard key={searchResult.id} {...searchResult} />
        ))}
    </div>
  )
}

export default SearchResults