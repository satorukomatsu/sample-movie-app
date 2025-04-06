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

    const onSearchButtonClick = async () => {
        navigate(`search-result?query=${text}`);
    }

    return (
        <>
            <AppHeader text={text} onChange={handleChangeText} onClick={onSearchButtonClick}/>
            <HomeMovieContent/>
        </>
    )
}

export default Home;