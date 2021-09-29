import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ExampleDialog } from './app.component';
import { ToggleButtonsModule } from "../../projects/am-bulba/src/lib/toggle-buttons/toggle-buttons.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarModule } from "../../projects/am-bulba/src/lib/navbar/navbar.module";
import { TabsModule } from "../../projects/am-bulba/src/lib/tabs/tabs.module";
import { PanelModule } from "../../projects/am-bulba/src/lib/panel/panel.module";
import { DialogModule } from "../../projects/am-bulba/src/lib/dialog/dialog.module";

@NgModule({
  declarations: [
    AppComponent,
    ExampleDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    ToggleButtonsModule,
    NavbarModule,
    TabsModule,
    PanelModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
