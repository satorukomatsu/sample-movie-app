import React from "react";
import MovieImgButton from "../atoms/MovieImgButton";
import { Box } from "@mui/material";
import "../../css/MovieListContent.css"

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

const SearchResultList: React.FC<Props> = ({movieList, onClick}) => {
    const baseUrl = "https://image.tmdb.org/t/p/original"
    return (
        <Box className="Search-result-box">
            {movieList.map((movie) => {
                if (!movie.poster_path || !movie.overview) {
                    return null;
                }
                return (
                    <Box className="Movie-content-box" key={movie.id}>
                        <MovieImgButton
                            srcUrl={`${baseUrl}${movie.poster_path}`}
                            alt={movie.title}
                            onClick={() => onClick(movie)}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}

export default SearchResultList