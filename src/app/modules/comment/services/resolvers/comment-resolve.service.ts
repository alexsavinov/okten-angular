import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";


@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    const {id} = route.params;
    return this.commentService.getById(id);
  }
}
