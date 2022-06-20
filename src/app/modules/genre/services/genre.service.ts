import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../../../constants';
import {ServerResponseGenres} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ServerResponseGenres> {
    return this.httpClient.get<ServerResponseGenres>(urls.genres);
  }
}
