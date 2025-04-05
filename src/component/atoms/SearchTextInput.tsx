import React from "react";
import { TextField } from "@mui/material";

type Props = {
    text: string
    onChange: (value: string) => void
}

const SearchTextInput: React.FC<Props> = ({text, onChange}) => {
    return (
        <TextField
            sx={{
                label: {
                    color: "#717171"
                },
                "& .MuiOutlinedInput-root": {
                    "& input": {
                        color: "white"
                    },
                    "& fieldset": {
                        borderColor: "#717171"
                    },
                    "&:hover:not(.Mui-focused) fieldset": {
                        borderColor: "white"
                    }
                }
            }}
            value={text}
            onChange={(event) => onChange(event.target.value)}
            label="Search Word"
        />
    )
}

export default SearchTextInput;