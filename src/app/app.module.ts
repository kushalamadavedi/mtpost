import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './shared/component/post/post.component';
import { CardComponent } from './shared/component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
