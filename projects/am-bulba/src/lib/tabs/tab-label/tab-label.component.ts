import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'am-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.css'],
})
export class TabLabelComponent implements OnInit {

  @ViewChild(TemplateRef) labelContent: TemplateRef<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
