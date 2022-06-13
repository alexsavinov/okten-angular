import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IGenre} from "../../interfaces";
import {GenreService} from "../../services";


@Injectable({
  providedIn: 'root'
})
export class GenreResolveService implements Resolve<any> {
// export class GenreResolveService implements Resolve<IGenre[]> {

  constructor(private genreService: GenreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenre[]> | Promise<IGenre[]> | IGenre[] {
  //   // const {id} = route.params;
  //   // return this.userService.getById(id).pipe(delay(1000)); // demo delay
  //   return this.genreService.getGenres().subscribe(data => console.log(data));
  }
}
