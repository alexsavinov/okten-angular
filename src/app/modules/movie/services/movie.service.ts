import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IMovie, ServerResponseMovies} from "../interfaces";
import {ServerResponseGenres} from "../../genre/interfaces";
import {environment} from '../../../../environments/environment';

// import {Headers} from '@angular/http';
const {auth_token} = environment;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  auth_token = auth_token;

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
