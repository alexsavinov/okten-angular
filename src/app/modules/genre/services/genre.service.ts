import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {ServerResponseGenres} from "../interfaces";


// import {Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  auth_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM3ZTNlY2I0NzkzOWM1YzJiN2U5NzZmN2Y1YTNlZCIsInN1YiI6IjYyMDAwYzNhOGYyNmJjMDBjYjEwMjgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.66Cde4kxeVsNVVbhnUs0lsaT83OkWgHz-epkFxRRqok';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ServerResponseGenres> {
    // console.log(urls.genres)
    return this.httpClient.get<ServerResponseGenres>(urls.genres,{headers: this.headers});
  }
}
