import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from "./input/input.directive";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    InputDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputDirective
  ]
})
export class FormGroupModule { }
