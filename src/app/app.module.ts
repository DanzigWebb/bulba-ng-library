import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ExampleDialog, SubmitDialog } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToggleButtonsModule } from "../../projects/am-bulba/src/lib/toggle-buttons";
import { NavbarModule } from "../../projects/am-bulba/src/lib/navbar";
import { TabsModule } from "../../projects/am-bulba/src/lib/tabs";
import { PanelModule } from "../../projects/am-bulba/src/lib/panel";
import { ModalModule } from "../../projects/am-bulba/src/lib/modal";
import { FormGroupModule } from "../../projects/am-bulba/src/lib/form-field";
import { CardModule } from "../../projects/am-bulba/src/lib/card";


@NgModule({
  declarations: [
    AppComponent,
    ExampleDialog,
    SubmitDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    ToggleButtonsModule,
    NavbarModule,
    TabsModule,
    PanelModule,
    ModalModule,
    FormGroupModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
