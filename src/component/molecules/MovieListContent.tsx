import React from "react";
import MovieImgButton from "../atoms/MovieImgButton";
import { Box } from "@mui/material";
import "../../css/MovieListContent.css"
import { Movie } from "../../types/movie";
import externalUrl from "../../const/externalUrl";

type Props = {
    movieList: Movie[]
    onClick: (movieInfo: Movie) => void
}

const MovieListContent: React.FC<Props> = ({movieList, onClick}) => {
    return (
        <Box className="Movie-list-box">
            {movieList.map((movie) => {
                if (!movie.poster_path || !movie.overview) {
                    return null;
                }
                return (
                    <Box className="Movie-content-box" key={movie.id}>
                        <MovieImgButton
                            srcUrl={`${externalUrl.imgBaseUrl}${movie.poster_path}`}
                            alt={movie.title}
                            onClick={() => onClick(movie)}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}

export default MovieListContent