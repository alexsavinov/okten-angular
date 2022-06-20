import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../../../constants';
import {IMovie, ServerResponseMovies} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(pageId: number = 1, genreId: number = 0): Observable<ServerResponseMovies> {
    return this.httpClient.get<ServerResponseMovies>(
      `${urls.movies}?page=${pageId}` + (genreId > 0 ? `&with_genres=${genreId}` : ''),
    );
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}?append_to_response=videos,images`);
  }

  search(query: string): Observable<ServerResponseMovies> {
    return this.httpClient.get<ServerResponseMovies>(`${urls.search}?query=${query}`);
  }
}
