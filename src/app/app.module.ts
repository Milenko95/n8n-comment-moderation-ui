import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModerationComponent } from './components/moderation/moderation.component';
import { CommentHistoryComponent } from './components/comment-history/comment-history.component';
import { ModerationHistoryComponent } from './components/moderation-history/moderation-history.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ModerationComponent,
    CommentHistoryComponent,
    ModerationHistoryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
