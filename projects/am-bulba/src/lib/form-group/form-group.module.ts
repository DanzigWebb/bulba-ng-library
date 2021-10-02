import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from "./input/input.directive";
import { FormsModule } from "@angular/forms";
import { FormGroupComponent } from './form-group/form-group.component';



@NgModule({
  declarations: [
    InputDirective,
    FormGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputDirective,
    FormGroupComponent,
  ]
})
export class FormGroupModule { }
