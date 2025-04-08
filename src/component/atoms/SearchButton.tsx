import React from "react";
import { Button } from "@mui/material";
import string from "../../const/string";

type Props = {
    onClick: () => void
}

const SearchButton: React.FC<Props> = ({onClick}) => {
    return <Button
                onClick={onClick}
                variant="contained"
            >
                {string.header.button}
            </Button>
}

export default SearchButton;