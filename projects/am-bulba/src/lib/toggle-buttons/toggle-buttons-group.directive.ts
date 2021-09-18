import { AfterContentInit, ContentChildren, Directive, forwardRef, InjectionToken, QueryList } from '@angular/core';
import { ToggleButtonsComponent } from "./toggle-buttons.component";

export const AM_BUTTON_TOGGLE_GROUP = new InjectionToken<ToggleButtonsGroupDirective>('AmButtonToggleGroup');

class SelectionModel {
  private selections: Set<ToggleButtonsComponent> = new Set();

  get value() {
    return Array.from(this.selections);
  }

  add(btn: ToggleButtonsComponent) {
    this.selections.add(btn);
  }

  remove(btn: ToggleButtonsComponent) {
    this.selections.delete(btn);
  }

  clear() {
    this.selections.clear();
  }
}

@Directive({
  selector: 'am-toggle-buttons-group',
  providers: [
    {
      provide: AM_BUTTON_TOGGLE_GROUP,
      useExisting: ToggleButtonsGroupDirective,
    },
  ],
  host: {
    'class': 'field has-addons',
  },
})
export class ToggleButtonsGroupDirective implements AfterContentInit {

  @ContentChildren(forwardRef(() => ToggleButtonsComponent), {
    descendants: true,
  }) public toggleButtons: QueryList<ToggleButtonsComponent> | undefined;

  constructor() {
  }

  ngAfterContentInit() {
    console.log(this.toggleButtons);
  }
}
