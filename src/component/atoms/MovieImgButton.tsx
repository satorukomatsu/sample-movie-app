import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import '../../css/MovieImgButton.css'

type Props = {
    srcUrl: string
    alt: string
    onClick: () => void
}

const MovieImgButton: React.FC<Props> = ({srcUrl, alt, onClick}) => {
    const [loaded, setLoaded] = useState<Boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.src = srcUrl;

        img.onload = () => {
            setLoaded(true);
        }
    }, [srcUrl]);

    return (
        <Button onClick={onClick}>
            {loaded ?
                <img
                    className='Movie-image'
                    src={srcUrl ? srcUrl : undefined}
                    alt={alt}
                    onLoad={() => setLoaded(true)}
                /> :
                <CircularProgress size="10vw"/>
            }
        </Button>
    )
}

export default MovieImgButton;