import { render, screen } from '@testing-library/react';
import TopRatedMovie from '../component/organisms/TopRatedMovie';
import PopularMovie from '../component/organisms/PopularMovie';
import { topRatedMovieListData, popularMovieListData } from './testData';

describe("organisms test", () => {
    test("render Movie List ---Top Rated---", () => {
        const onClick = jest.fn();
        render(<TopRatedMovie movieList={topRatedMovieListData} onClick={onClick}/>);
        const category = screen.getByText("Top Rated")
        expect(category).toBeInTheDocument();
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(topRatedMovieListData.length);
    });

    test("render Movie List ---Popular---", () => {
        const onClick = jest.fn();
        render(<PopularMovie movieList={popularMovieListData} onClick={onClick}/>);
        const category = screen.getByText("Popular")
        expect(category).toBeInTheDocument();
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(popularMovieListData.length);
    });
});