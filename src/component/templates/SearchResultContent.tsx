import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Category from "../atoms/Category";
import SearchResultList from "../molecules/SearchResultList";
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

const PopularMovie: React.FC = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    
    useEffect(() => {
        async function searchMovie() {
            const baseUrl = "https://api.themoviedb.org/3/search/movie";
            const apiKey = process.env.REACT_APP_TMDB_API_KEY;
            const searchResult = await axios.get(`${baseUrl}?api_key=${apiKey}&query=${query}`);
            setMovieList(searchResult.data.results);
        }
        searchMovie();
    }, [query]);
    return (
        <div className="Movie-list">
            <Category title="Search Result"/>
            <SearchResultList movieList={movieList}/>
        </div>
    )
}

export default PopularMovie;