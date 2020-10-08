import React from 'react';
import { MovieItem } from "../movie-item/MovieItem";

const News = (props) => {
    let filmsItems = props.state.films.map(m => <MovieItem key={m.id} title={m.title} img={m.img} about={m.about} />);
    return (
        <div className="news-wrapper">
            <h2><span role="img" aria-label="fire">🔥</span> Новинки</h2>
            <div className="films-items">{filmsItems}</div>
        </div>
    )
};

export default News;