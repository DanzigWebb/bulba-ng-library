import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarModule } from "../../projects/am-bulba/src/lib/navbar";
import { TabsExampleModule } from "./tabs-example/tabs-example.module";
import { ToggleButtonsExampleModule } from "./toggle-buttons-example/toggle-buttons-example.module";
import { ModalExampleModule } from "./modal-example/modal-example.module";
import { SelectExampleModule } from "./select-example/select-example.module";
import { MenuExampleModule } from "./menu-example/menu-example.module";
import { AccordionExampleModule } from "./accordion-example/accordion-example.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,

    TabsExampleModule,
    ToggleButtonsExampleModule,
    ModalExampleModule,
    SelectExampleModule,
    MenuExampleModule,
    AccordionExampleModule,

    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
