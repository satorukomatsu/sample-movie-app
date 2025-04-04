import React from "react";
import MovieImgButton from "../atoms/MovieImgButton";
import { Box } from "@mui/material";
import "../../css/MovieListContent.css"

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
}

const MovieListContent: React.FC<Props> = ({movieList}) => {
    const onClickMovieImg = () => {}
    const baseUrl = "https://image.tmdb.org/t/p/original"
    return (
        <Box className="movieListBox">
            {movieList.map((movie) => {
                return (
                    <Box className="movieContentBox" key={movie.id}>
                        <MovieImgButton
                            srcUrl={movie.poster_path ? `${baseUrl}${movie.poster_path}` : undefined}
                            alt={movie.title}
                            onClick={onClickMovieImg}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}

export default MovieListContent