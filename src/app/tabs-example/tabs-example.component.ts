import { Component, OnInit } from '@angular/core';
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../../projects/am-bulba/src/lib/tabs";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit {

  tabControl = new FormControl(1)

  position: TabsPositionType | undefined;
  size: TabsSizeType | undefined;
  viewType: TabsViewType | undefined = 'tabs-lifted';
  rounded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
