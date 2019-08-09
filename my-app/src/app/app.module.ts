import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { CardComponent } from './components/card.component';
import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, CardComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }