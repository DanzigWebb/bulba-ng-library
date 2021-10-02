import {
  AfterContentInit,
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
import { NgControl } from "@angular/forms";
import { OptionComponent } from "./option/option.component";
import { createPopper, Instance } from "@popperjs/core";
import { DOCUMENT } from "@angular/common";

export const AM_SELECT = new InjectionToken<SelectComponent>('AmSelect');

@Component({
  selector: 'am-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: AM_SELECT,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent implements OnInit, AfterContentInit, AmFormFieldControl {

  @Output() closed = new EventEmitter();

  @Input() placeholder = '';


  control!: NgControl;

  opened = false;
  value: string | null = null;

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
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
  }

  openPanel(dropdownTpl: TemplateRef<any>, trigger: HTMLInputElement) {
    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    this.dropdownRef = <HTMLElement>this.view.rootNodes[0];
    const dropdown = <HTMLElement>this.dropdownRef.querySelector('.select-dropdown')

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

  checkOption(option: OptionComponent) {
    if (this.options) {
      this.options.forEach(option => option.checked = false);
      option.checked = true;
      this.value = option.value;
      this.close()
    }
  }
}
