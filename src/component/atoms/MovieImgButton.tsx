import React from 'react';
import { Button } from '@mui/material';
import '../../css/MovieImgButton.css'

type Props = {
    srcUrl: string | undefined
    alt: string
    onClick: () => void
}

const MovieImgButton: React.FC<Props> = ({srcUrl, alt, onClick}) => {
    return (
        <Button onClick={onClick}>
            <img className='Movie-image' src={srcUrl} alt={alt}/>
        </Button>
    )
}

export default MovieImgButton;