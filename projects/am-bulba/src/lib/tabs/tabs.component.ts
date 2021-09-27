import { Component, ContentChildren, forwardRef, OnInit, QueryList } from '@angular/core';
import { TabComponent } from "./tab/tab.component";

@Component({
  selector: 'am-tabs-group',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ContentChildren(forwardRef(() => TabComponent), {
    descendants: true,
  }) public toggleButtons: QueryList<TabComponent> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
