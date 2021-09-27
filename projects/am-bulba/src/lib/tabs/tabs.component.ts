import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TabComponent } from "./tab/tab.component";

@Component({
  selector: 'am-tabs-group',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit, AfterContentInit {

  @Input() isBoxed = false;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    if (this.tabs) {
      const activeTabs = this.tabs.filter((tab) => tab.active) || [];

      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }

}
