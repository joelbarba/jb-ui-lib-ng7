import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JbUiLibNg7Module } from 'jb-ui-lib-ng7';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JbUiLibNg7Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
