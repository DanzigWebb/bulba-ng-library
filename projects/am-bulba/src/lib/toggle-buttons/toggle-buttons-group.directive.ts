import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  EventEmitter,
  forwardRef,
  InjectionToken,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { ToggleButtonsComponent } from "./toggle-buttons.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const AM_BUTTON_TOGGLE_GROUP = new InjectionToken<ToggleButtonsGroupDirective>('AmButtonToggleGroup');

export const TOGGLE_BUTTONS_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButtonsGroupDirective),
  multi: true,
};

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
    TOGGLE_BUTTONS_GROUP_VALUE_ACCESSOR,
    {
      provide: AM_BUTTON_TOGGLE_GROUP,
      useExisting: ToggleButtonsGroupDirective,
    },
  ],
  host: {
    'class': 'field has-addons',
  },
})
export class ToggleButtonsGroupDirective implements ControlValueAccessor, AfterContentInit {

  @Output() valueChange = new EventEmitter<ToggleButtonsEvent>();

  @Input()
  get value(): any {
    const selected = this.selectionModel ? this.selectionModel.value : [];
    return selected[0] ? selected[0].value : undefined;
  }

  set value(newValue: any) {
    this.setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }

  private selectionModel = new SelectionModel();

  @ContentChildren(forwardRef(() => ToggleButtonsComponent), {
    descendants: true,
  }) public toggleButtons: QueryList<ToggleButtonsComponent> | undefined;

  constructor(
    private cdRef: ChangeDetectorRef,
  ) {
  }

  ngAfterContentInit() {
    this.checkState();
    this.setSelectionByValue(this.value);
  }

  syncButtonsState(btn: ToggleButtonsComponent) {
    this.resetButtons();
    btn.checked = true;
    this.checkState();
    this.updateValue();
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

  updateValue() {
    const value = this.selectionModel.value.map(btn => btn.value)[0];
    this._controlValueAccessorChangeFn(value);
  }

  setSelectionByValue(value: any) {
    const currentBtn = this.toggleButtons?.find(btn => btn.value === value);
    this.resetButtons();
    if (currentBtn) {
      currentBtn.checked = true;
      this.checkState();
    }
  }

  // Value accessor
  writeValue(value: any): void {
    this.value = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  _controlValueAccessorChangeFn: (value: any) => void = () => {};

  _onTouched: () => any = () => {};
}
