import React from 'react'

export const GenreItem = (props) => {
    return (
        <div className={'genre-item ' + props.class}>
            <span>{props.smile}</span>
            <p>{props.title}</p>
        </div>
    )
};