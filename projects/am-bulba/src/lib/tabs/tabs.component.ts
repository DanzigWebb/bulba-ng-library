import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from "./tab/tab.component";
import { TabsPositionType, TabsSizeType, TabsViewType } from "./tabs.type";

@Component({
  selector: 'am-tabs-group',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, AfterContentInit {

  @Input() position: TabsPositionType | undefined;
  @Input() size: TabsSizeType | undefined;
  @Input() viewType: TabsViewType | undefined;
  @Input() rounded = false;

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
    this.tabs?.toArray().forEach(tab => {
      tab.active = false;
      tab.detectChanges();
    });
    tab.active = true;
    tab.detectChanges();
  }
}
