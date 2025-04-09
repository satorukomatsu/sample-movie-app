import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import HomeMovieContent from '../component/templates/HomeMovieContent';
import SearchResultContent from '../component/templates/SearchResultContent';
import {
    movieDetailData,
    topRatedMovieListData,
    popularMovieListData,
    searchResultMovieListData
} from './testData';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetailDialog from '../component/templates/MovieDetailDialog';

jest.mock('../component/organisms/TopRatedMovie', () => (props: any) => (
    <>
        <div data-testid="top-rated-movie">{props.movieList.length} top rated</div>
    </>
));
jest.mock('../component/organisms/PopularMovie', () => (props: any) => (
    <>
        <div data-testid="popular-movie">{props.movieList.length} popular</div>
    </>
));
jest.mock('../component/molecules/SearchResultList', () => (props: any) => (
    <>
        <div data-testid="search-result-movie">{props.movieList.length} searched result</div>
    </>
));

const mockTopRated = {
    results: topRatedMovieListData
};

const mockPopular = {
    results: popularMovieListData
};

const mockSearchResult = {
    results: searchResultMovieListData
};

describe("templates test", () => {
    describe("Home Movie Content", () => {
        beforeEach(() => {
            global.fetch = jest.fn()
                .mockResolvedValueOnce({
                    status: 200,
                    json: async () => Promise.resolve(mockTopRated),
                })
                .mockResolvedValueOnce({
                    status: 200,
                    json: async () => Promise.resolve(mockPopular),
                }) as any;
        });
      
        afterEach(() => {
          jest.resetAllMocks();
        });
      
        test("fetches and displays Home Movie Content", async () => {
          // eslint-disable-next-line testing-library/no-unnecessary-act
          await act(async() => {
            render(<HomeMovieContent />)
          });

          expect(screen.getByText(/top rated/i)).toBeInTheDocument();
          expect(screen.getByText(/popular/i)).toBeInTheDocument();
      
          await waitFor(() => {
            expect(screen.getByTestId("top-rated-movie")).toHaveTextContent(`${topRatedMovieListData.length} top rated`);
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByTestId("popular-movie")).toHaveTextContent(`${popularMovieListData.length} popular`);
          });
        });
    });

    describe("Search Result Content", () => {
        beforeEach(() => {
            global.fetch = jest.fn()
                .mockResolvedValueOnce({
                    status: 200,
                    json: async () => Promise.resolve(mockSearchResult),
                }) as any;
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        test("fetches and displays Search Result Content", async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async() => {
                render(
                    <MemoryRouter><SearchResultContent/></MemoryRouter>
                );
            });

            expect(screen.getByText(/search result/i)).toBeInTheDocument();

            await waitFor(() => {
                expect(screen.getByTestId("search-result-movie")).toHaveTextContent(`${searchResultMovieListData.length} searched result`);
            });
        });
    });
    
    describe("Movie Detail Dialog", () => {
        const imgBaseUrl = "https://image.tmdb.org/t/p/original";
        const onClose = jest.fn();
        test("hidden", () => {
            render(
                <MovieDetailDialog
                    open={false}
                    title={movieDetailData.title}
                    tagline={movieDetailData.tagline}
                    srcUrl={`${imgBaseUrl}${movieDetailData.poster_path}`}
                    alt={movieDetailData.title}
                    overview={movieDetailData.overview}
                    genres={movieDetailData.genres}
                    onClose={onClose}
                />
            );
            const dialogElement = screen.queryByText("Sample Detail Movie");
            expect(dialogElement).not.toBeInTheDocument();
        });

        test("shown", () => {
            render(
                <MovieDetailDialog
                    open={true}
                    title={movieDetailData.title}
                    tagline={movieDetailData.tagline}
                    srcUrl={`${imgBaseUrl}${movieDetailData.poster_path}`}
                    alt={movieDetailData.title}
                    overview={movieDetailData.overview}
                    genres={movieDetailData.genres}
                    onClose={onClose}
                />
            );
            
            const dialogTitle = screen.getByText(/sample detail movie/i);
            expect(dialogTitle).toBeInTheDocument();
            const dialogImage = screen.getByAltText(/sample detail movie/i);
            expect(dialogImage).toBeInTheDocument();
            const dialogOverview = screen.getByText(/sample overview/i);
            expect(dialogOverview).toBeInTheDocument();
            const closeButton = screen.getByRole("button");
            fireEvent.click(closeButton);
            expect(onClose).toBeCalledTimes(1);
        });

    })
    
});
