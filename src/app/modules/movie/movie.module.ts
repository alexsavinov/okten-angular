import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import {GenresListComponent} from "../../components/genres-list/genres-list.component";
import {MovieComponent} from './components/movie/movie.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieRoutingModule} from './movie-routing.module';
import {MovieService} from './services';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent,
    GenresListComponent,

  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule {
}
