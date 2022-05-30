import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentRoutingModule} from './comment-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentResolveService, CommentService} from "./services";
import {CustomPipe} from './services/pipes/custom.pipe';


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  exports: [
    CustomPipe
  ],
  providers: [
    CommentService,
    CommentResolveService
  ]
})
export class CommentModule {
}
