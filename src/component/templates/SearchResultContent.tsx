import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Category from "../atoms/Category";
import SearchResultList from "../molecules/SearchResultList";
import MovieDetailDialog from "./MovieDetailDialog";
import "../../css/MovieListContent.css";

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

type Genre = {
    id: number
    name: string
}

type MovieDetail = {
    adult: boolean,
    backdrop_path: string | null,
    genres: Genre[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    title: string,
    tagline: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

const SearchResultContent: React.FC = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMovieInfo, setDialogMovieInfo] = useState<MovieDetail>();

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const searchMovie = async(query: string) => {
        try {
            const baseUrl = "https://api.themoviedb.org/3/search/movie";
            const apiKey = process.env.REACT_APP_TMDB_API_KEY;
            const response = await fetch(`${baseUrl}?api_key=${apiKey}&query=${query}`);
            if (response.status !== 200) {
                throw new Error(`レスポンスステータス: ${response.status}`);
            }
            const searchResult = await response.json();
            setMovieList(searchResult.results);
        } catch(error) {
            console.error(error);
        }
    }

    const onClickMovieImg = async(movieInfo: Movie) => {
        try {
            const baseUrl = "https://api.themoviedb.org/3/movie";
            const apiKey = process.env.REACT_APP_TMDB_API_KEY;
            const movieDetailUrl = `${baseUrl}/${movieInfo.id}?api_key=${apiKey}&language=ja`;
            const response = await fetch(movieDetailUrl);
            if (response.status !== 200) {
                throw new Error(`レスポンスステータス: ${response.status}`);
            }
            const responseBody = await response.json();
            setDialogMovieInfo(responseBody);
            setDialogOpen(true);
        } catch (error) {
            console.error(error);
        }
    }

    const onDialogClose = () => {
        setDialogOpen(false);
    }
    
    useEffect(() => {
        searchMovie(query);
    }, [query]);

    const imgBaseUrl = "https://image.tmdb.org/t/p/original";
    return (
        <div className="Movie-list">
            <Category title="Search Result"/>
            <SearchResultList movieList={movieList} onClick={onClickMovieImg}/>
            <MovieDetailDialog
                open={dialogOpen}
                onClose={onDialogClose}
                title={dialogMovieInfo?.title || ""}
                tagline={dialogMovieInfo?.tagline || ""}
                srcUrl={`${imgBaseUrl}${dialogMovieInfo?.poster_path}`}
                alt={dialogMovieInfo?.title || ""}
                overview={dialogMovieInfo?.overview || ""}
                genres={dialogMovieInfo?.genres || []}
            />
        </div>
    )
}

export default SearchResultContent;