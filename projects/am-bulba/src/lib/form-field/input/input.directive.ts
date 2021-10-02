import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { NgControl, NgModel } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InputClassesEnum, SIZES } from "./input.classes.enum";
import { AM_FORM_GROUP, FormFieldComponent } from "../form-field/form-field.component";
import { AmFormFieldControl } from "../form-field.type";

@Directive({
  selector: 'input[amInput]',
  exportAs: 'amInput',
  providers: [NgModel],
  host: {
    '[class.is-danger]': '!isValid && control.touched',
  },
})
export class InputDirective implements OnInit, OnDestroy, AmFormFieldControl {
  private _isRounded = false;
  private _size = '';
  private _isLoading = false;

  private formField: FormFieldComponent;

  isValid: boolean | undefined;

  @Input()
  get isRounded() { return this._isRounded; }

  set isRounded(v) {
    this._isRounded = v;
    this._isRounded
      ? this.setClass(InputClassesEnum.rounded)
      : this.removeClass(InputClassesEnum.rounded);
  }

  @Input()
  get size() { return this._size; }

  set size(v) {
    this._size = v;
    this.removeSizeClasses();
    if (v) {
      this.setClass(v);
    }
  }

  @Input()
  get isLoading() { return this._isLoading; }

  set isLoading(v) {
    this._isLoading = v;
    this.formField.isLoading = v;
  }


  private get element() {
    return this.elementRef.nativeElement;
  }

  private destroy$ = new Subject();

  constructor(
    @Optional() @Inject(AM_FORM_GROUP) formGroup: FormFieldComponent,
    protected elementRef: ElementRef<HTMLInputElement>,
    public readonly control: NgControl,
  ) {
    this.formField = formGroup;
  }

  ngOnInit() {
    this.init();
    this.control.control?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isValid = this.control.control?.valid;
      });
  }

  private init() {
    this.setClass(InputClassesEnum.base);
  }

  private setClass = (className: string) => this.element.classList.add(className);
  private removeClass = (className: string) => this.element.classList.remove(className);

  private removeSizeClasses() {
    for (const size in SIZES) {
      this.removeClass(size);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
