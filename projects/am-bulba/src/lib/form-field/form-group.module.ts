import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from "./input/input.directive";
import { FormsModule } from "@angular/forms";
import { FormFieldComponent } from './form-field/form-field.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './select/option/option.component';


@NgModule({
  declarations: [
    InputDirective,
    FormFieldComponent,
    FormFieldErrorComponent,
    SelectComponent,
    OptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputDirective,
    FormFieldComponent,
    FormFieldErrorComponent,
    SelectComponent,
    OptionComponent,
  ],
})
export class FormGroupModule {
}
