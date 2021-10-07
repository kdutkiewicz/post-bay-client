import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
 const routes: Routes = [
   { path: 'questions', component: QuestionListComponent },
   { path: 'question/:id', component: QuestionComponent},
   { path: 'post', component: QuestionComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
