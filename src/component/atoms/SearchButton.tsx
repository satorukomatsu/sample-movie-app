import React from "react";
import { Button } from "@mui/material";

type Props = {
    onClick: () => void
}

const SearchButton: React.FC<Props> = ({onClick}) => {
    return <Button onClick={onClick}>Search</Button>
}

export default SearchButton;