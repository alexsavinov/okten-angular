import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

// import {IGenre, IMovie} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // movieStorage = new BehaviorSubject<IMovie>({} as IMovie);
  // genresStorage = new BehaviorSubject<IGenre[]>({} as IGenre[]);
  // page = new BehaviorSubject<number>(1);
  // total_pages: number = 1;
  // total_results: number = 1;

  constructor() {
  }

}
