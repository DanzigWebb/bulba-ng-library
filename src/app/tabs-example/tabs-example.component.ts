import { Component, OnInit } from '@angular/core';
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../../projects/am-bulba/src/lib/tabs";

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

}
