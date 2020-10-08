import React from 'react'

export const MovieItem = (props) => {
    return (
        <div className="movieItem">
            <img src={props.img} alt="Film trailer" />
            <div className="movie-about">{props.about}</div>
            <p>{props.title}</p>
        </div>
    )
};