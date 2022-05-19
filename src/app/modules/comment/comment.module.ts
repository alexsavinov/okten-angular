import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentRoutingModule} from './comment-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentService} from "./services";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule {
}
