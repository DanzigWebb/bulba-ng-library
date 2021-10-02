import { AfterViewInit, Component, ContentChild, InjectionToken, OnInit } from '@angular/core';
import { InputDirective } from "../input/input.directive";

export const AM_FORM_GROUP = new InjectionToken<FormFieldComponent>('AmFormGroup');

@Component({
  selector: 'am-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  providers: [
    {
      provide: AM_FORM_GROUP,
      useExisting: FormFieldComponent,
    },
  ],
})
export class FormFieldComponent implements OnInit, AfterViewInit {

  isLoading = false;

  // Todo: реализовать добавление аттрибутов в div.control через дочерний элемент
  @ContentChild(InputDirective) input!: InputDirective;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('this.input', this.input);
  }

}
