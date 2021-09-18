import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  forwardRef,
  InjectionToken,
  Output,
  QueryList,
} from '@angular/core';
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

export class ToggleButtonsEvent {
  readonly value: any[];

  constructor(buttons: ToggleButtonsComponent[]) {
    this.value = buttons.map(btn => btn.value);
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

  @Output() valueChange = new EventEmitter<ToggleButtonsEvent>();

  private selectionModel = new SelectionModel();

  @ContentChildren(forwardRef(() => ToggleButtonsComponent), {
    descendants: true,
  }) public toggleButtons: QueryList<ToggleButtonsComponent> | undefined;

  constructor() {
  }

  ngAfterContentInit() {
    this.checkState();
  }

  syncButtonsState(btn: ToggleButtonsComponent) {
    this.resetButtons();
    btn.checked = true;
    this.checkState();
    this.valueChange.emit(new ToggleButtonsEvent(this.selectionModel.value));
  }

  resetButtons() {
    this.toggleButtons?.forEach(btn => {
      btn.checked = false;
      btn.detectChange();
    });
  }

  checkState() {
    this.selectionModel.clear();
    this.toggleButtons
      ?.filter(btn => btn.checked)
      .forEach(btn => this.selectionModel.add(btn));
  }
}
