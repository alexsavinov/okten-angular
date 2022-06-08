import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {OverlayModule} from "@angular/cdk/overlay";
// import {StarRatingModule} from "angular-star-rating";
import {NgxPaginationModule} from "ngx-pagination";

import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieRoutingModule} from "./movie-routing.module";
import {MovieResolveService, MovieService} from "./services";
import {GenreModule} from "../genre/genre.module";
import {PaginatorComponent} from './components/paginator/paginator.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BarRatingModule} from "ngx-bar-rating";
// import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent
    // PaginatorComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    GenreModule,
    NgxPaginationModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    // FontAwesomeModule,
    // StarRatingModule.forRoot()
  ],
  providers: [
    MovieService,
    MovieResolveService
  ]
})
export class MovieModule {
}
