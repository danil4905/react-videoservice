import React from 'react'

const Search = (props) => {
    return (
        <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Поиск..." /> 
            <button className="search-btn btn">Найти</button>
        </div>
    )
};

export default Search;