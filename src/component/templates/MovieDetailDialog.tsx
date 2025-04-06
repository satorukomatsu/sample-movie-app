import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import "../../css/MovieDetailDialog.css"

type Genre = {
    id: number
    name: string
}

type Props = {
    open: boolean
    title: string
    tagline: string
    srcUrl: string | undefined
    alt: string
    overview: string
    genres: Genre[]
    onClose: () => void
}

const MovieDetailDialog: React.FC<Props> = ({
    open,
    title,
    tagline,
    srcUrl,
    alt,
    overview,
    genres,
    onClose
}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <div className="Movie-detail-dialog">
                <DialogTitle>
                    <p className="Movie-detail-dialog-title">{title}</p>
                    <p className="Movie-detail-dialog-tagline">{`「${tagline}」`}</p>
                </DialogTitle>
                <DialogContent className="Movie-detail-dialog-content">
                    <img className="Movie-detail-dialog-image" src={srcUrl} alt={alt}/>
                    <div className="Content-detail-info">
                        <h4>ジャンル</h4>
                        <p>
                            {genres.map((genre, index) => {
                                return (
                                    index < (genres.length - 1) ?
                                    <span>{`${genre.name}, `}</span> :
                                    <span>{genre.name}</span>
                                )
                            })}
                        </p>
                    </div>
                    <div className="Content-detail-info">
                        <h4>詳細</h4>
                        <p>{overview}</p>
                    </div>
                </DialogContent>
            </div>
            <DialogActions>
                <Button variant="text" onClick={onClose}>閉じる</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MovieDetailDialog;