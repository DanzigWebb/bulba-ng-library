import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { AM_SELECT, SelectComponent } from "../select.component";

@Component({
  selector: 'am-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent implements OnInit {

  @Input() checked = false;
  @Input() value = '';

  constructor(
    @Optional() @Inject(AM_SELECT) public select: SelectComponent,
  ) {
  }

  ngOnInit(): void {
  }

  onClick($event: MouseEvent) {
    $event.preventDefault();
    this.select.checkOption(this);
  }
}
