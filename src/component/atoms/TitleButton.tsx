import React from 'react';
import { Button } from '@mui/material';

type Props = {
    onClick: () => void
}

const TitleButton: React.FC<Props> = ({onClick}) => {
    return (
        <Button sx={{color: "white"}} variant='text' onClick={onClick}>
            <h1>Sample Movie App</h1>
        </Button>
    )
}

export default TitleButton;