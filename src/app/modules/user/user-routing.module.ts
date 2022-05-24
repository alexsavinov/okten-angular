import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersComponent} from "./components/users/users.component";
import {UserResolveService} from "./services";
import {MyGuardGuard} from "./guards";


const routes: Routes = [
  {
    path: '', component: UsersComponent, canActivate: [MyGuardGuard], canDeactivate: [MyGuardGuard],
    children: [
      {path: ':id', component: UserDetailsComponent, resolve: {data: UserResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
