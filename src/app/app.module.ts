import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleButtonsModule } from "../../projects/am-bulba/src/lib/toggle-buttons/toggle-buttons.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarModule } from "../../projects/am-bulba/src/lib/navbar/navbar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    ToggleButtonsModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
