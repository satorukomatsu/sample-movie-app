import React from 'react';
import { Button } from '@mui/material';

type Props = {
    srcUrl: string | undefined
    alt: string
    onClick: () => void
}

const MovieImgButton: React.FC<Props> = ({srcUrl, alt, onClick}) => {
    return (
        <Button onClick={onClick}>
            <img src={srcUrl} alt={alt}/>
        </Button>
    )
}

export default MovieImgButton;