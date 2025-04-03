import React from "react";
import { TextField } from "@mui/material";

type Props = {
    text: string
    onChange: (value: string) => void
}

const SearchTextInput: React.FC<Props> = ({text, onChange}) => {
    return (
        <TextField
            value={text}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Search Word"
        />
    )
}

export default SearchTextInput;