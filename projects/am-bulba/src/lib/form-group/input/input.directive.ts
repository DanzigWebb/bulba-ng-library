import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControl, NgModel } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InputClassesEnum, SIZES } from "./input.classes.enum";

@Directive({
  selector: 'input[amInput]',
  providers: [NgModel],
  host: {
    '[class.is-danger]': 'isValid',
  },
})
export class InputDirective implements OnInit, OnDestroy {
  private _isRounded = false;
  private _size = '';
  private _isLoading = false;

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
    this._isLoading
      ? this.setClass(InputClassesEnum.loading)
      : this.removeClass(InputClassesEnum.loading);
  }


  private get element() {
    return this.elementRef.nativeElement;
  }

  private destroy$ = new Subject();

  constructor(
    protected elementRef: ElementRef<HTMLInputElement>,
    private ngModel: NgModel,
    private control: NgControl,
  ) {
  }

  ngOnInit() {
    this.init();
    this.control.control?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isValid = this.control.control?.invalid;
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
