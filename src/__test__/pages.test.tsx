import { render, screen } from '@testing-library/react';
import Home from '../component/pages/Home';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchResult from '../component/pages/SearchResult';
import NotFound from '../component/pages/NotFound';

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedNavigate
}))

describe("pages test", () => {
    test("render Home", async() => {
        render(<MemoryRouter><Home/></MemoryRouter>);

        //ページ表示時にはダイアログ非表示
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();

        const title = screen.getByText(/sample movie app/i);
        await userEvent.click(title);
        expect(mockedNavigate).toBeCalledWith("/");

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button", {name: /search/i});
        await userEvent.type(input, "test");
        await userEvent.click(button);
        expect(mockedNavigate).toBeCalledWith("/search-result?query=test");
    });

    test("render Search Result", async() => {
        render(<MemoryRouter><SearchResult/></MemoryRouter>);

        //ページ表示時にはダイアログ非表示
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();

        const title = screen.getByText(/sample movie app/i);
        await userEvent.click(title);
        expect(mockedNavigate).toBeCalledWith("/");

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button", {name: /search/i});
        await userEvent.type(input, "test");
        await userEvent.click(button);
        expect(mockedNavigate).toBeCalledWith("/search-result?query=test");
    });

    test("render Not Found", () => {
        render(<NotFound/>);
        expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
    });
});
