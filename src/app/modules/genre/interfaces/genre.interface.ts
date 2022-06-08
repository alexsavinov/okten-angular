export interface IGenre {
    id: number | undefined;
    name: string | undefined;
}

export interface ServerResponseGenres {
    genres: IGenre[];
}
