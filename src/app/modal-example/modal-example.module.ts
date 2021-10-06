import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDialog, ModalExampleComponent } from './modal-example.component';
import { ModalModule } from "../../../projects/am-bulba/src/lib/modal";
import { PanelModule } from "../../../projects/am-bulba/src/lib/panel";

@NgModule({
  declarations: [
    ModalExampleComponent,
    ExampleDialog,
  ],
  imports: [
    CommonModule,
    ModalModule,
    PanelModule,
  ],
  exports: [
    ModalExampleComponent
  ]
})
export class ModalExampleModule { }
