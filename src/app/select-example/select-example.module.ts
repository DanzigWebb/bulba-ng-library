import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectExampleComponent } from './select-example.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroupModule } from "../../../projects/am-bulba/src/lib/form-field";



@NgModule({
  declarations: [
    SelectExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupModule,
  ],
  exports: [
    SelectExampleComponent
  ]
})
export class SelectExampleModule { }
