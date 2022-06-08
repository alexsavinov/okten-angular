import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IUser} from "../interfaces";
import {IGenre} from "../../movie/interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  userStorage = new BehaviorSubject<IUser>({} as IUser);
  genresStorage = new BehaviorSubject<IGenre[]>({} as IGenre[]);

  constructor() {
  }


}
