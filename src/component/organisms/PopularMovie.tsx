import React from "react";
import Category from "../atoms/Category";
import MovieListContent from "../molecules/MovieListContent";
import "../../css/MovieListContent.css";
import { Movie } from "../../types/movie";

type Props = {
    movieList: Movie[]
    onClick: (movieInfo: Movie) => void
}

const PopularMovie: React.FC<Props> = ({movieList, onClick}) => {
    return (
        <div className="Movie-list">
            <Category title="Popular"/>
            <MovieListContent movieList={movieList} onClick={onClick}/>
        </div>
    )
}

export default PopularMovie;