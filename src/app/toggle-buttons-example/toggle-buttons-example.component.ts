import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ToggleButtonsEvent } from "../../../projects/am-bulba/src/lib/toggle-buttons";

@Component({
  selector: 'app-toggle-buttons-example',
  templateUrl: './toggle-buttons-example.component.html',
  styleUrls: ['./toggle-buttons-example.component.scss']
})
export class ToggleButtonsExampleComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: ToggleButtonsEvent) {
    console.log('onChange event:', event);
  }
}
