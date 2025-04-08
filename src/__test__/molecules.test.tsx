import { fireEvent, render, screen } from '@testing-library/react';
import MovieSearchBox from '../component/molecules/MovieSearchBox';
import MovieListContent from '../component/molecules/MovieListContent';
import SearchResultContent from '../component/molecules/SearchResultList';
import { movieListData, searchResultMovieListData } from './testData';

describe("molecules test", () => {
    test("render Movie Search Box", () => {
        const text = "test text";
        const onClick = jest.fn();
        const onChange = jest.fn();
        render(<MovieSearchBox text={text} onChange={onChange} onClick={onClick} />);
        const input = screen.getByLabelText("Search Word");
        const button = screen.getByRole("button");
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("render Movie List Content", () => {
        const onClick = jest.fn();
        render(<MovieListContent movieList={movieListData} onClick={onClick}/>);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(movieListData.length);
    });

    test("render Search Result Content", () => {
        const onClick = jest.fn();
        render(<SearchResultContent movieList={searchResultMovieListData} onClick={onClick}/>);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(searchResultMovieListData.length);
    });
});