import { render, screen } from '@testing-library/react';
import TopRatedMovie from '../component/organisms/TopRatedMovie';

describe("organisms test", () => {
    test("render Movie List ---Top Rated---", () => {
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
        render(<TopRatedMovie movieList={movieListData} />);
        const category = screen.getByText("Top Rated")
        expect(category).toBeTruthy();
        const buttons = screen.getAllByRole("button");
        expect(buttons).toBeTruthy();
    });
});