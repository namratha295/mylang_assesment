import React from 'react'
import "./SearchResult.css"
import SearchSuggestion from './SearchSuggestion'
const SearchResult = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result,id)=>{
        return(
          <SearchSuggestion key={id} result={result}/>
        )
      })}
    </div>
  )
}

export default SearchResult