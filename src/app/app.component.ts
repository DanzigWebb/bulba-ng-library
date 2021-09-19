import { Component, ViewEncapsulation } from '@angular/core';
import { ToggleButtonsEvent } from "../../projects/am-bulba/src/lib/toggle-buttons/toggle-buttons-group.directive";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'am-bulbalar';

  control = new FormControl(['left', 'right']);

  buttons = [
    {
      title: 'left',
      checked: false,
    },
    {
      title: 'center',
      checked: false,
      disabled: true,
    },
    {
      title: 'right',
      checked: true,
    },
  ];

  value: ToggleButtonsEvent | undefined;

  onChange(event: ToggleButtonsEvent) {
    this.value = event;
  }

  constructor() {
    this.control.valueChanges.subscribe(data => {
      console.log('новое значение:', data);
    });
  }
}
