import { Directive, Input, OnInit } from '@angular/core';
import { MenuPanelComponent } from "./menu-panel/menu-panel.component";

@Directive({
  selector: '[amMenuTrigger]'
})
export class MenuTriggerDirective implements OnInit {

  @Input() menu!: MenuPanelComponent;

  constructor() {
  }

  ngOnInit() {
    console.log(this.menu);
  }
}
