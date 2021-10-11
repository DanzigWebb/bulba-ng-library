import { Component, OnInit } from '@angular/core';
import { Placement } from "@popperjs/core";

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.scss']
})
export class MenuExampleComponent implements OnInit {

  selected = '';

  placement: Placement = 'bottom-start';

  constructor() { }

  ngOnInit(): void {
  }

}
