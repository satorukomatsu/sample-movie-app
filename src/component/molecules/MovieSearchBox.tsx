import React from "react";
import SearchTextInput from "../atoms/SearchTextInput";
import SearchButton from "../atoms/SearchButton";
import "../../css/MovieSearchBox.css"

type Props = {
    text: string
    onChange: (value: string) => void
    onClick: () => void
}

const MovieSearchBox: React.FC<Props> = ({text, onChange, onClick}) => {
    return (
        <div className="Movie-search-box">
            <SearchTextInput text={text} onChange={onChange}/>
            <SearchButton onClick={onClick}/>
        </div>
    )
}

export default MovieSearchBox;