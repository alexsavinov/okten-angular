import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import {MovieComponent} from './components/movie/movie.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieRoutingModule} from './movie-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieService} from './services';
import {GenresListComponent} from "../../components/genres-list/genres-list.component";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent,
    GenresListComponent
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
