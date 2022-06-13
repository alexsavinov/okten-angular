import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(urls.users);
  }
}
