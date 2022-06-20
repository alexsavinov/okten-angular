import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import {GenresListComponent} from "../../components/genres-list/genres-list.component";
import {MovieComponent} from './components/movie/movie.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieRoutingModule} from './movie-routing.module';
import {MovieService} from './services';
import {StarRatingComponent} from "../../components/star-rating/star-rating.component";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent,
    GenresListComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    MovieService
  ],
  exports: [
    StarRatingComponent
  ]
})
export class MovieModule {
}
