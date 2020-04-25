import React from 'react';
import { GenreItem} from '../genre-item/GenreItem';

const Genres = (props) => {
    let genresItems = props.state.genres.map(m => <GenreItem key={m.id} title={m.title} smile={m.smile} class={m.class} />)
    return (
        <div className="genres-wrapper">
            <h2>Жанры</h2>
            <div className="genres-items">{genresItems}</div>
        </div>
    )
};

export default Genres;