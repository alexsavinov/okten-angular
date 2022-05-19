import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersComponent} from "./components/users/users.component";


const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
