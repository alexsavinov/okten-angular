import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IUser} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // storage = new BehaviorSubject<IUser>({id: 0, name: '', username: '', email: ''});
  storage = new BehaviorSubject<IUser>({} as IUser);

  constructor() {
  }


}
