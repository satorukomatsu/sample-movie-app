import React from 'react';

type Props = {
    srcUrl: string
    alt: string
}

const DialogMovieImg: React.FC<Props> = ({srcUrl, alt}) => {
    return <img src={srcUrl} alt={alt} />
}

export default DialogMovieImg;