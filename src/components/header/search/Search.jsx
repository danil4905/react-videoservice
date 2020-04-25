import React from 'react'

const Search = (props) => {
 return (
     <div className="search-wrapper">
         <input type="text" placeholder="Поиск..."/> <button className="search-btn btn">Найти</button>
     </div>
 )
};

export default Search;