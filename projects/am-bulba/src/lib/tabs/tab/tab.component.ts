import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TabLabelComponent } from "../tab-label/tab-label.component";

@Component({
  selector: 'am-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() active = false;
  @Input() label = '';

  @ContentChild(TabLabelComponent) labelComponent: TabLabelComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
