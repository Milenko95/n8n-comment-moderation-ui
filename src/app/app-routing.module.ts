import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModerationComponent } from './components/moderation/moderation.component';
import { CommentHistoryComponent } from './components/comment-history/comment-history.component';
import { ModerationHistoryComponent } from './components/moderation-history/moderation-history.component';

const routes: Routes = [
  { path: 'moderation', component: ModerationComponent},
  { path: 'comment-history', component: CommentHistoryComponent},
  { path: 'moderation-history', component: ModerationHistoryComponent},
  { path: '', redirectTo: '/moderation', pathMatch: 'full' },
  { path: '**', redirectTo: '/moderation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
