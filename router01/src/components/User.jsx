import React from 'react'
import { useSearchParams } from 'react-router-dom';



const User = () => {
  const [SearchParams, setSearchParams]=useSearchParams()
  return (
    <div>
    <h1>This is search box</h1>
    <form >
      <label htmlFor=''>search</label>
      <input type="text" placeholder='search' onChange={(e) => setSearchParams({q:e.target.value})} />
      <br />
      <input type="submit" value="search" />
    </form>
    </div>
  )
}

export default User;

