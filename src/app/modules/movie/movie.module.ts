import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";

import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieRoutingModule} from "./movie-routing.module";
import {MovieResolveService, MovieService} from "./services";
import {GenreModule} from "../genre/genre.module";

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    GenreModule,
    NgxPaginationModule
  ],
  providers: [
    MovieService,
    MovieResolveService
  ]
})
export class MovieModule {
}
