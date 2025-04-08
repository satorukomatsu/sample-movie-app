import { fireEvent, render, screen } from '@testing-library/react';
import Category from '../component/atoms/Category';
import TitleButton from '../component/atoms/TitleButton';
import DialogMovieTitle from '../component/atoms/DialogMovieTitle';
import MovieImgButton from '../component/atoms/MovieImgButton';
import DialogMovieImg from '../component/atoms/DialogMovieImg';
import DialogMovieDescription from '../component/atoms/DialogMovieDescription';
import SearchTextInput from '../component/atoms/SearchTextInput';
import SearchButton from '../component/atoms/SearchButton';

describe("atoms test", () => {
    test("render Category", () => {
        const title = 'test title'
        render(<Category title={title}/>);
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument()
    });

    test("render Title", () => {
        const onClick = jest.fn();
        render(<TitleButton onClick={onClick}/>);
        const element = screen.getByText("Sample Movie App");
        expect(element).toBeInTheDocument()
    });

    test("render Movie Image Button", () => {
        const sampleImgUrl = "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg";
        const alt = "sample image";
        const onClick = jest.fn();
        render(<MovieImgButton srcUrl={sampleImgUrl} alt={alt} onClick={onClick} />);
        const circularElement = screen.getByRole("progressbar");
        expect(circularElement).toBeInTheDocument();
        const img = new Image();
        img.src = sampleImgUrl;
        img.onload = () => {
            const element = screen.getByAltText(alt);
            expect(element).toBeInTheDocument();
        }
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1)
    });

    test("render Dialog Movie Title", () => {
        const title = 'test title'
        render(<DialogMovieTitle title={title}/>);
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument()
    });

    test("render Dialog Movie Image", () => {
        const sampleImgUrl = "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg";
        const alt = "sample image";
        render(<DialogMovieImg srcUrl={sampleImgUrl} alt={alt} />)
        const element = screen.getByAltText(alt);
        expect(element).toBeInTheDocument();
    });

    test("render Dialog Movie Description", () => {
        const description = "sample description";
        render(<DialogMovieDescription description={description} />)
        const element = screen.getByText(description);
        expect(element).toBeInTheDocument();
    });

    test("render Search Text Input", () => {
        const onChange = jest.fn();
        render(<SearchTextInput text="" onChange={onChange} />)
        const element = screen.getByLabelText("Search Word");
        expect(element).toBeInTheDocument();
        fireEvent.change(element, {
            target: {value: "sample value"}
        });
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test("render Search Button", () => {
        const onClick = jest.fn();
        render(<SearchButton onClick={onClick} />)
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});