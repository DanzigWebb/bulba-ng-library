import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputExampleComponent } from './input-example.component';
import { FormGroupModule } from "../../../projects/am-bulba/src/lib/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    InputExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormGroupModule,
    ReactiveFormsModule,
  ],
})
export class InputExampleModule { }
