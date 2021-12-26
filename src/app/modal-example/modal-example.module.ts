import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDialog, ModalExampleComponent } from './modal-example.component';
import { ModalModule, PanelModule } from 'am-bulba';

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
