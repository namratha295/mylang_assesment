import React from 'react'
import "./SearchSuggestion.css"
const SearchSuggestion = ({result}) => {
  return (
    <div className='search-suggestion' 
         onClick={(e)=>alert(`You clicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default SearchSuggestion