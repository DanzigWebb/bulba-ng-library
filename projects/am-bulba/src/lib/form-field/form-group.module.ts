import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from "./input/input.directive";
import { FormsModule } from "@angular/forms";
import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [
    InputDirective,
    FormFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputDirective,
    FormFieldComponent,
  ],
})
export class FormGroupModule {
}
