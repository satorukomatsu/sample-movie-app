import { fireEvent, render, screen } from '@testing-library/react';
import MovieSearchBox from '../component/molecules/MovieSearchBox';
import MovieListContent from '../component/molecules/MovieListContent';
// import DialogMovieTitle from '../component/atoms/DialogMovieTitle';
// import MovieImgButton from '../component/atoms/MovieImgButton';
// import DialogMovieImg from '../component/atoms/DialogMovieImg';
// import DialogMovieDescription from '../component/atoms/DialogMovieDescription';
// import SearchTextInput from '../component/atoms/SearchTextInput';
// import SearchButton from '../component/atoms/SearchButton';

describe("molecules test", () => {
    test("render Movie Search Box", () => {
        const text = "test text";
        const onClick = jest.fn();
        const onChange = jest.fn();
        render(<MovieSearchBox text={text} onChange={onChange} onClick={onClick} />);
        const input = screen.getByPlaceholderText("Search Word");
        const button = screen.getByRole("button");
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("render Movie List Content", () => {
        const movieListData = [
                {
                    "adult": false,
                    "backdrop_path": "/uOQgMhYyu7dkXdHoRkCqZIF32M6.jpg",
                    "genre_ids": [
                        28,
                        12
                    ],
                    "id": 1241320,
                    "original_language": "ja",
                    "original_title": "キングダム 大将軍の帰還",
                    "overview": "Depicts a continuation of the \"Battle of Mayang\", an all-out war against the neighboring country Zhao that Shin and Wang Ki fought in in the previous work \"Flame of Fate\".",
                    "popularity": 21.6962,
                    "poster_path": "/qZKKwXyZ92K0mIRpf2FbCkQa7oO.jpg",
                    "release_date": "2024-07-12",
                    "title": "Kingdom IV: Return of the Great General",
                    "video": false,
                    "vote_average": 6.842,
                    "vote_count": 520
                }
        ];
        render(<MovieListContent movieList={movieListData} />);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toBeTruthy();
    });
});