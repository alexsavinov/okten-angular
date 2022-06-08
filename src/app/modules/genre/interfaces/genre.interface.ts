export interface IGenre {
    id: number;
    name: string;
}

export interface ServerResponseGenres {
    genres: IGenre[];
}
