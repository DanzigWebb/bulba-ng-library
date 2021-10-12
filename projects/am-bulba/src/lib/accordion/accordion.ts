import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';


@Component({
  selector: 'am-accordion-header',
  template: `
      <header class="card-header">
          <div class="card-header-title">
              <ng-content></ng-content>
          </div>
          <button
              class="card-header-icon"
              aria-label="more options"
              [class.rotate-icon]="active"
          >
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
          </button>
      </header>
  `,
  styleUrls: ['./accordion.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionHeader {

  @Input() active = false;

}

@Component({
  selector: 'am-accordion-content',
  template: `
      <div class="card-content">
          <div class="content">
              <ng-content></ng-content>
          </div>
      </div>
  `,
  styleUrls: ['./accordion.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContent {

  @Input() active = false;
}

@Component({
  selector: 'am-accordion-group',
  template: `
      <div class="card">
          <ng-content></ng-content>
      </div>
  `,
  styleUrls: ['./accordion.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordion implements OnInit, AfterViewChecked {

  @ContentChildren(AccordionHeader) tabs: QueryList<AccordionHeader> = new QueryList();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log(this.tabs);
  }
}
