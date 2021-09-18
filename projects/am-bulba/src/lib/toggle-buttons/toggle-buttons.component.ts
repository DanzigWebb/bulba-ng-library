import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { AM_BUTTON_TOGGLE_GROUP, ToggleButtonsGroupDirective } from "./toggle-buttons-group.directive";

@Component({
  selector: 'am-toggle-button',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'control',
  }
})
export class ToggleButtonsComponent implements OnInit {

  @Input() checked = false;

  buttonToggleGroup: ToggleButtonsGroupDirective;

  constructor(
    @Optional() @Inject(AM_BUTTON_TOGGLE_GROUP) toggleGroup: ToggleButtonsGroupDirective
  ) {
    this.buttonToggleGroup = toggleGroup
  }

  ngOnInit(): void {
  }
}
