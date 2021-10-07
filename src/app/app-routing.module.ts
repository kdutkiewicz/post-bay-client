import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
 const routes: Routes = [
   { path: 'posts', component: PostListComponent },
   { path: 'post/:id', component: PostComponent},
   { path: 'post', component: PostComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
