import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";

import {GenreComponent} from './components/genre/genre.component';
import {GenresComponent} from './components/genres/genres.component';
import {GenreDetailsComponent} from './components/genre-details/genre-details.component';
import {GenreRoutingModule} from "./genre-routing.module";
import {GenreResolveService, GenreService} from "./services";


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
    GenreDetailsComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [
    GenreComponent
  ],
  providers: [
    GenreService,
    GenreResolveService
  ]
})
export class GenreModule {
}
