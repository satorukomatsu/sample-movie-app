export type Movie = {
    id: number,
    overview: string,
    poster_path: string | null,
    title: string,
}

export type Genre = {
    id: number
    name: string
}

export type MovieDetail = {
    genres: Genre[],
    id: number,
    overview: string,
    poster_path: string | null,
    title: string,
    tagline: string
}