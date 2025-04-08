import React from "react";
import Category from "../atoms/Category";
import "../../css/MovieListContent.css";
import MovieListContent from "../molecules/MovieListContent";
import { Movie } from "../../types/movie";

type Props = {
    movieList: Movie[]
    onClick: (movieInfo: Movie) => void
}

const TopRatedMovie: React.FC<Props> = ({movieList, onClick}) => {
    return (
        <div className="Movie-list">
            <Category title="Top Rated"/>
            <MovieListContent movieList={movieList} onClick={onClick}/>
        </div>
    )
}

export default TopRatedMovie;