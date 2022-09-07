import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { AllUserTweetsComponent } from './all-user-tweets/all-user-tweets.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'allUserTweets', component: AllUserTweetsComponent},
  {path: 'allComments', component: AllCommentsComponent},
  {path: '**', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
