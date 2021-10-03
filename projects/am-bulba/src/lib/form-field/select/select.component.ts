import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EmbeddedViewRef,
  EventEmitter,
  forwardRef,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AmFormFieldControl } from "../form-field.type";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { OptionComponent } from "./option/option.component";
import { createPopper, Instance } from "@popperjs/core";
import { DOCUMENT } from "@angular/common";

export const AM_SELECT = new InjectionToken<SelectComponent>('AmSelect');

export const SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

class SelectModel {
  private selections = new Set<OptionComponent>();

  get value() {
    return Array.from(this.selections)[0];
  }

  add(option: OptionComponent) {
    this.selections.add(option);
  }

  remove(option: OptionComponent) {
    this.selections.delete(option);
  }

  clear() {
    this.selections.clear();
  }
}

@Component({
  selector: 'am-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SELECT_VALUE_ACCESSOR,
    {
      provide: AM_SELECT,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent implements OnInit, AfterContentInit, ControlValueAccessor, AmFormFieldControl {

  @Output() closed = new EventEmitter();
  @Output() valueChange = new EventEmitter<any>();

  @Input() placeholder = '';

  control!: NgControl;

  opened = false;
  selectModel = new SelectModel();
  value: string | null = null;

  accessorInitialValue: string | null = null;

  @ContentChildren(forwardRef(() => OptionComponent), {
    descendants: true,
  }) public options: QueryList<OptionComponent> | undefined;

  private view: EmbeddedViewRef<any> | null = null;
  private popperRef: Instance | null = null;
  private dropdownRef: HTMLElement | null = null;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private vcr: ViewContainerRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.cdRef.detectChanges();
    if (!this.options) {
      return;
    }

    if (this.accessorInitialValue) {
      this.resetOptions();
      const option = this.options.find(option => option.value === this.accessorInitialValue);
      option && this.checkOption(option, false);
      return;
    }

    const checked = this.options.find(option => option.checked);
    if (checked) {
      this.selectModel.add(checked);
      this.checkOption(checked);
    }
  }

  open(dropdownTpl: TemplateRef<any>, trigger: HTMLInputElement) {
    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    this.dropdownRef = <HTMLElement>this.view.rootNodes[0];
    const dropdown = <HTMLElement>this.dropdownRef.querySelector('.select-dropdown');

    this.doc.body.appendChild(this.dropdownRef);

    dropdown.style.width = `${trigger.offsetWidth}px`;

    this.zone.runOutsideAngular(() => {
      this.popperRef = createPopper(trigger, dropdown, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
        ],
      });
    });
  }

  close() {
    this.closed.emit();
    this.popperRef?.destroy();
    this.view?.destroy();
    this.dropdownRef?.remove();
    this.view = null;
    this.popperRef = null;
    this.dropdownRef = null;
  }

  checkOption(option: OptionComponent, isUserChange = true) {
    if (this.options) {
      Promise.resolve().then(() => {
        this.resetOptions();
        this.selectModel.add(option);
        option.checked = true;
        option.markForCheck();
        this.value = option.value;
        this._controlValueAccessorChangeFn(this.value);
        this.close();

        if (isUserChange) {
          this.emitChange();
        }
      })
    }
  }

  checkOptionByValue(value: any) {
    if (this.options) {
      const option = this.options.find(option => option.value === value);
      if (option) {
        option.checked = true;
        option.markForCheck();
        this.checkOption(option);
      }
    }
  }

  private resetOptions() {
    if (this.options) {
      this.options.forEach(option => {
        option.checked = false;
        option.markForCheck();
      });
      this.selectModel.clear();
      this.value = this.selectModel.value?.value || null;
    }
  }

  emitChange() {
    console.log(this.selectModel);
    this.valueChange.emit(this.selectModel.value?.value || null);
  }

  // Value accessor
  writeValue(value: any): void {
    if (!this.options) {
      this.accessorInitialValue = value;
    }

    if (!value) {
      this.resetOptions();
      this.emitChange();
      return;
    }

    this.checkOptionByValue(value);
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
