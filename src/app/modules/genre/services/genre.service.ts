import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../../../constants';
import {ServerResponseGenres} from '../interfaces';
import {environment} from '../../../../environments/environment';

const {auth_token} = environment;

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ServerResponseGenres> {
    return this.httpClient.get<ServerResponseGenres>(urls.genres, {headers: this.headers});
  }
}
