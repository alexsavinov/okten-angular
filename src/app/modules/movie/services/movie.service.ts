import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, Observable} from "rxjs";

import {urls} from "../../../constants";
import {IGenre, IMovie, ServerResponseGenres, ServerResponseMovies} from "../interfaces";


// import {Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  auth_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM3ZTNlY2I0NzkzOWM1YzJiN2U5NzZmN2Y1YTNlZCIsInN1YiI6IjYyMDAwYzNhOGYyNmJjMDBjYjEwMjgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.66Cde4kxeVsNVVbhnUs0lsaT83OkWgHz-epkFxRRqok';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

  constructor(private httpClient: HttpClient) {
  }

  getAll(pageId: number = 1, genreId: number = 0): Observable<ServerResponseMovies> {
    // return this.httpClient.get<ServerResponseMovies>(urls.movies, {headers: this.headers});
    return this.httpClient.get<ServerResponseMovies>(
      `${urls.movies}?page=${pageId}` + (genreId > 0 ? `&with_genres=${genreId}` : ''),
      {headers: this.headers});
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}?append_to_response=videos,images`,{headers: this.headers});
  }

  getGenres(): Observable<ServerResponseGenres> {
    // console.log(urls.genres)
    return this.httpClient.get<ServerResponseGenres>(urls.genres,{headers: this.headers});
  }
}

// export const movieService = {
//     getMovies: (pageId: number, genreId: number = 0) =>
//         axiosService.get<ServerResponse>(`${urls.movies}?page=${pageId}` + (genreId > 0 ? `&with_genres=${genreId}` : '')),
//     getMovieDetailsById: (movieId: number) =>
//         axiosService.get<IMovie>(`${urls.movie}/${movieId}?append_to_response=videos,images`),
//     getGenres: () =>
//         axiosService.get<ServerResponseGenres>(urls.genres)
// }
