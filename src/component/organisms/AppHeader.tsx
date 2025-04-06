import React from "react";
import TitleButton from "../atoms/TitleButton";
import MovieSearchBox from "../molecules/MovieSearchBox";

type Props = {
    text: string
    onChange: (value: string) => void
    onClick: () => void
}

const AppHeader: React.FC<Props> = ({text, onChange, onClick}) => {
    return (
        <header className="App-header">
            <TitleButton onClick={onClick}/>
            <MovieSearchBox text={text} onChange={onChange} onClick={onClick}/>
        </header>
    )
}

export default AppHeader;