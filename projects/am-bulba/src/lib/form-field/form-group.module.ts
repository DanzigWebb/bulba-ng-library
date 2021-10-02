import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from "./input/input.directive";
import { FormsModule } from "@angular/forms";
import { FormFieldComponent } from './form-field/form-field.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';


@NgModule({
  declarations: [
    InputDirective,
    FormFieldComponent,
    FormFieldErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputDirective,
    FormFieldComponent,
    FormFieldErrorComponent,
  ],
})
export class FormGroupModule {
}
