import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {UserDetailsComponent} from "./components/user-details/user-details.component";
// import {UsersComponent} from "./components/users/users.component";
// import {MoviesComponent} from "./components/movies/movies.component";
// import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
// import {MovieResolveService} from "./services";
import {GenresComponent} from "./components/genres/genres.component";
import {GenreDetailsComponent} from "./components/genre-details/genre-details.component";
import {MoviesComponent} from "../movie/components/movies/movies.component";
import {MovieDetailsComponent} from "../movie/components/movie-details/movie-details.component";
import {MovieResolveService} from "../movie/services";
// import {MyGuardGuard} from "./guards";


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
