import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostResolveService} from "./services";


const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
