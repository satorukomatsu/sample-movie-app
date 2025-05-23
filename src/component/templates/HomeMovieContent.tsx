import React, { useEffect, useState } from "react";
import TopRatedMovie from "../organisms/TopRatedMovie";
import PopularMovie from "../organisms/PopularMovie";
import MovieDetailDialog from "./MovieDetailDialog";
import { Movie, MovieDetail } from "../../types/movie";
import externalUrl from "../../const/externalUrl";

const HomeMovieContent: React.FC = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMovieInfo, setDialogMovieInfo] = useState<MovieDetail>();

    const fetchTopRated = async (topRatedUrl: string, apiKey: string) => {
        try {
            const response = await fetch(`${topRatedUrl}?api_key=${apiKey}`);
            if (response.status !== 200) {
                throw new Error(`レスポンスステータス: ${response.status}`);
            }
            const responseBody = await response.json();
            setTopRatedMovies(responseBody.results);
        } catch(error) {
            console.error(error);
        }
    }

    const fetchPopular = async (popularUrl: string, apiKey: string) => {
        try {
            const response = await fetch(`${popularUrl}?api_key=${apiKey}`);
            if (response.status !== 200) {
                throw new Error(`レスポンスステータス: ${response.status}`);
            }
            const responseBody = await response.json();
            setPopularMovies(responseBody.results);
        } catch(error) {
            console.error(error);
        }
    }

    const onClickMovieImg = async(movieInfo: Movie) => {
        try {
            const apiKey = process.env.REACT_APP_TMDB_API_KEY;
            const movieDetailUrl = `${externalUrl.baseUrl}/${movieInfo.id}?api_key=${apiKey}&language=ja`;
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
        const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
        const topRatedUrl = `${externalUrl.baseUrl}/top_rated?api_key=${apiKey}&language=ja`;
        const popularUrl = `${externalUrl.baseUrl}/popular?api_key=${apiKey}&language=ja`;
        
        fetchTopRated(topRatedUrl, apiKey);
        fetchPopular(popularUrl, apiKey);
    }, []);

    return (
        <>
            <TopRatedMovie movieList={topRatedMovies} onClick={onClickMovieImg}/>
            <PopularMovie movieList={popularMovies} onClick={onClickMovieImg}/>
            <MovieDetailDialog
                open={dialogOpen}
                onClose={onDialogClose}
                title={dialogMovieInfo?.title || ""}
                tagline={dialogMovieInfo?.tagline || ""}
                srcUrl={`${externalUrl.imgBaseUrl}${dialogMovieInfo?.poster_path}`}
                alt={dialogMovieInfo?.title || ""}
                overview={dialogMovieInfo?.overview || ""}
                genres={dialogMovieInfo?.genres || []}
            />
        </>
    )
}

export default HomeMovieContent;