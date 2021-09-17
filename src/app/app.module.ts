import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AmBulbaModule } from "../../projects/am-bulba/src/lib/am-bulba.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmBulbaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
