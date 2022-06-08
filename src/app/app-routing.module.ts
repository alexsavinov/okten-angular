import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./modules').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)},
      {path: 'movies', loadChildren: () => import('./modules').then(value => value.MovieModule)},
      {path: 'genres', loadChildren: () => import('./modules').then(value => value.GenreModule)}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
