import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieResolveService} from "./services";


const routes: Routes = [
  {
    path: '', component: MoviesComponent,
  },
  {path: ':id', component: MovieDetailsComponent, resolve: {data: MovieResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
