import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../organisms/AppHeader";
import "../../css/MovieListContent.css";
import SearchResultContent from "../templates/SearchResultContent";

const SearchResult: React.FC = () => {
    const [text, setText] = useState("");

    const handleChangeText = (value: string) => {
        setText(value);
    }

    const navigate = useNavigate();

    const onSearchButtonClick = () => {
        navigate(`/search-result?query=${text}`);
    }

    const onTitleClick = () => {
        navigate("/");
    }

    return (
        <>
            <AppHeader
                text={text}
                onChange={handleChangeText}
                onSearchButtonClick={onSearchButtonClick}
                onTitleClick={onTitleClick}
            />
            <SearchResultContent/>
        </>
    )
}

export default SearchResult;