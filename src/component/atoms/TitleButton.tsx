import React from 'react';
import { Button } from '@mui/material';
import string from '../../const/string';

type Props = {
    onClick: () => void
}

const TitleButton: React.FC<Props> = ({onClick}) => {
    return (
        <Button sx={{color: "white"}} variant='text' onClick={onClick}>
            <h1>{string.header.title}</h1>
        </Button>
    )
}

export default TitleButton;