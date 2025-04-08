import React from "react";
import Category from "../atoms/Category";
import "../../css/MovieListContent.css";
import MovieListContent from "../molecules/MovieListContent";

type Movie = {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type Props = {
    movieList: {
        adult: boolean,
        backdrop_path: string | null,
        genre_ids: number[],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string | null,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }[]
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