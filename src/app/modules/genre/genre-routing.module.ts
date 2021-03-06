import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GenresComponent} from './components/genres/genres.component';
import {MoviesComponent} from '../movie/components/movies/movies.component';
import {MovieDetailsComponent} from '../movie/components/movie-details/movie-details.component';
import {MovieResolveService} from '../movie/services';


const routes: Routes = [
  {
    path: '', component: GenresComponent, children: [
      {path: ':id', component: MoviesComponent},
    ]
  },
  {path: ':id/:id', component: MovieDetailsComponent, resolve: {data: MovieResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule {
}
