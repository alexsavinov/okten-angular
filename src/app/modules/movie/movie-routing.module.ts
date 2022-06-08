import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {UserDetailsComponent} from "./components/user-details/user-details.component";
// import {UsersComponent} from "./components/users/users.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MovieResolveService} from "./services";
// import {MyGuardGuard} from "./guards";


const routes: Routes = [
  {
    // path: '', component: MoviesComponent, children: [
    //   {path: ':id', component: MovieDetailsComponent, resolve: {data: MovieResolveService}}
    // ]
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
