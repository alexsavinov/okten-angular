import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {PostComponent} from "./components/post/post.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from "./components/posts/posts.component";
import {PostService} from "./services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule {
}
