import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeMovieContent from "../templates/HomeMovieContent";
import AppHeader from "../organisms/AppHeader";

const Home: React.FC = () => {
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
            <HomeMovieContent/>
        </>
    )
}

export default Home;