import { AfterContentInit, Component, ContentChild, InjectionToken, OnInit } from '@angular/core';
import { InputDirective } from "../input/input.directive";
import { NgControl } from "@angular/forms";
import { SelectComponent } from "../select/select.component";
import { animationError } from "./form-field.animation";

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
  animations: [
    ...animationError
  ]
})
export class FormFieldComponent implements OnInit, AfterContentInit {

  isLoading = false;
  control: NgControl | undefined;

  @ContentChild(InputDirective) input!: InputDirective;
  @ContentChild(SelectComponent) select!: SelectComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.findControl();
  }

  findControl() {
    if (this.input) {
      this.control = this.input.control;
      return;
    }
    if (this.select) {
      this.control = this.select.control;
      return;
    }
  }

}
