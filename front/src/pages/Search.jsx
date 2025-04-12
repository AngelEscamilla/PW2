import React from 'react'
import { useLocation } from 'react-router-dom'

const useQuery = () => new URLSearchParams(useLocation().search)

const Search = () => {
  const query = useQuery()
  const searchTerm = query.get('q')

  return (
    <div className="search-page" style={{ color: 'white', padding: '20px' }}>
      <h2>Resultados para: "{searchTerm}"</h2>
      {/* You could map search results here */}
    </div>
  )
}

export default Search
