import React from 'react'
import { useState, useSearchParams } from 'react-router-dom'

function Search() {
    const [query, setQuery] = useState(null);
   const [searchParams, setSearchParams] = useSearchParams();
   const item = setSearchParams({})
  return (
    <>
    
    </>
  )
}

export default Search