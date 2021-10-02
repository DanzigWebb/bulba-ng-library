import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  InjectionToken,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { AmFormFieldControl } from "../form-field.type";
import { NgControl } from "@angular/forms";
import { OptionComponent } from "./option/option.component";

export const AM_SELECT = new InjectionToken<SelectComponent>('AmSelect');

@Component({
  selector: 'am-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: AM_SELECT,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent implements OnInit, AfterContentInit, AmFormFieldControl {

  control!: NgControl;

  @Input() placeholder = '';

  opened = false;
  value: string | null = null;

  @ContentChildren(forwardRef(() => OptionComponent), {
    descendants: true,
  }) public options: QueryList<OptionComponent> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.options);
  }

  openPanel() {
    this.opened = true;
  }

  closePanel() {
    this.opened = false;
  }

  checkOption(option: OptionComponent) {
    if (this.options) {
      this.options.forEach(option => option.checked = false);
      option.checked = true;
      this.value = option.value;
      console.log(this.value);
      this.closePanel();
    }
  }
}
