import { Component, ViewEncapsulation } from '@angular/core';
import { ToggleButtonsEvent } from "../../projects/am-bulba/src/lib/toggle-buttons/toggle-buttons-group.directive";
import { FormControl } from "@angular/forms";
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../projects/am-bulba/src/lib/tabs/tabs.type";

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

  // Tabs
  position: TabsPositionType | undefined;
  size: TabsSizeType | undefined;
  viewType: TabsViewType | undefined;
  rounded = false;

  onChange(event: ToggleButtonsEvent) {
    console.log('onChange event:', event);
  }

  constructor() {
    this.control.valueChanges.subscribe(data => {
      console.log('valueChanges subscribe:', data);
    });
  }
}
