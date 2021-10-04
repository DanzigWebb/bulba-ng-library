import { Component, OnInit } from '@angular/core';
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../../projects/am-bulba/src/lib/tabs";
import { ToggleButtonsEvent } from "../../../projects/am-bulba/src/lib/toggle-buttons";

@Component({
  selector: 'app-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit {

  position: TabsPositionType | undefined;
  size: TabsSizeType | undefined;
  viewType: TabsViewType | undefined;
  rounded = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: ToggleButtonsEvent) {
    console.log('onChange event:', event);
  }


}
