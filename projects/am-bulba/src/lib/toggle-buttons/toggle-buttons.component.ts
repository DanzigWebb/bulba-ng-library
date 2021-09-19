import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { AM_BUTTON_TOGGLE_GROUP, ToggleButtonsGroupDirective } from "./toggle-buttons-group.directive";

@Component({
  selector: 'am-toggle-button',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'control',
  },
})
export class ToggleButtonsComponent implements OnInit {
  private _checked = false;

  @Input() value: any;
  @Input() disabled = false;

  @Input()
  get checked() { return this._checked; };

  set checked(value) {
    this._checked = value;
  }

  buttonToggleGroup: ToggleButtonsGroupDirective;

  constructor(
    @Optional() @Inject(AM_BUTTON_TOGGLE_GROUP) toggleGroup: ToggleButtonsGroupDirective,
    private ref: ChangeDetectorRef,
  ) {
    this.buttonToggleGroup = toggleGroup;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonToggleGroup.syncButtonsState(this);
  }

  detectChange() {
    this.ref.markForCheck();
  }
}
