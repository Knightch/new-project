import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutExpertsComponent } from './about-experts/about-experts.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { BlogComponent } from './blog/blog.component';
import { TestYourSelfComponent } from './test-your-self/test-your-self.component';
import { ConnectNowComponent } from './connect-now/connect-now.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutExpertsComponent,
    DiscussionForumComponent,
    BlogComponent,
    TestYourSelfComponent,
    ConnectNowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
