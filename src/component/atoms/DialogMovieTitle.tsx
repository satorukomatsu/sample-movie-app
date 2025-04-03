import React from 'react';
import { DialogTitle } from '@mui/material';

type Props = {
    title: string
}

const DialogMovieTitle: React.FC<Props> = ({title}) => {
    return <DialogTitle>{title}</DialogTitle>
}

export default DialogMovieTitle;