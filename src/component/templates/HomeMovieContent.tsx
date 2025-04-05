import React, { useEffect, useState } from "react";
import axios from "axios";
import TopRatedMovie from "../organisms/TopRatedMovie";
import PopularMovie from "../organisms/PopularMovie";

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

const HomeMovieContent: React.FC = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const baseUrl = "https://api.themoviedb.org/3/movie";
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        const topRatedUrl = `${baseUrl}/top_rated?api_key=${apiKey}&language=ja`;
        const popularUrl = `${baseUrl}/popular?api_key=${apiKey}&language=ja`;

        async function fetchTopRated() {
            const topRatedResult = await axios.get(topRatedUrl);
            setTopRatedMovies(topRatedResult.data.results);
        }
        async function fetchPopular() {
            const popularResult = await axios.get(popularUrl);
            setPopularMovies(popularResult.data.results);
        }

        fetchTopRated();
        fetchPopular();
    }, [])
    return (
        <>
            <TopRatedMovie movieList={topRatedMovies}/>
            <PopularMovie movieList={popularMovies}/>
        </>
    )
}

export default HomeMovieContent;