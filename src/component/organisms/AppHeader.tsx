import React from "react";
import TitleButton from "../atoms/TitleButton";
import MovieSearchBox from "../molecules/MovieSearchBox";

type Props = {
    text: string
    onChange: (value: string) => void
    onSearchButtonClick: () => void
    onTitleClick: () => void
}

const AppHeader: React.FC<Props> = ({
    text,
    onChange,
    onSearchButtonClick,
    onTitleClick
}) => {
    return (
        <header className="App-header">
            <TitleButton onClick={onTitleClick}/>
            <MovieSearchBox text={text} onChange={onChange} onClick={onSearchButtonClick}/>
        </header>
    )
}

export default AppHeader;