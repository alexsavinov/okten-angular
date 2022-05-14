import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentsComponent} from './components/comments/comments.component';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {HeaderComponent} from './components/header/header.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';

const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {path: '', redirectTo: 'comments', pathMatch: 'full'},
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: ':id', component: CommentDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentsComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
