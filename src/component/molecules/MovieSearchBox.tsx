import React from "react";
import SearchTextInput from "../atoms/SearchTextInput";
import SearchButton from "../atoms/SearchButton";

type Props = {
    text: string
    onChange: (value: string) => void
    onClick: () => void
}

const MovieSearchBox: React.FC<Props> = ({text, onChange, onClick}) => {
    return (
        <div>
            <SearchTextInput text={text} onChange={onChange}/>
            <SearchButton onClick={onClick}/>
        </div>
    )
}

export default MovieSearchBox;