import { AfterViewInit, Component, ContentChild, InjectionToken, Input, OnInit } from '@angular/core';
import { InputDirective } from "../input/input.directive";

export const AM_FORM_GROUP = new InjectionToken<FormGroupComponent>('AmFormGroup');

@Component({
  selector: 'am-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
  providers: [
    {
      provide: AM_FORM_GROUP,
      useExisting: FormGroupComponent,
    },
  ],
})
export class FormGroupComponent implements OnInit, AfterViewInit {

  isLoading = false;

  // Todo: реализовать добавление аттрибутов в div.control через дочерний элемент
  @ContentChild(InputDirective) input!: HTMLInputElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('this.input', this.input);
  }

}
