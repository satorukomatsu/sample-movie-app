import React from "react";

type Props = {
    description: string
}

const DialogMovieDescription: React.FC<Props> = ({description}) => {
    return <p>{description}</p>
}

export default DialogMovieDescription;