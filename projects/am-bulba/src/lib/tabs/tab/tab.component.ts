import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'am-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() active = false;
  @Input() label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
