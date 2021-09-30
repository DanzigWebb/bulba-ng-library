import { Component, HostBinding, Inject, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalContainer } from "../modal-container.model";
import { ModalContext } from "../modal-context.model";
import { animate, animateChild, query, style, transition, trigger } from "@angular/animations";
import { DOCUMENT } from "@angular/common";

const animations = [
  trigger('host', [
    transition(':leave', [
      query('@backdrop,@box', [
        animateChild(),
      ]),
    ]),
    transition(':enter', [
      query('@backdrop,@box', [
        animateChild(),
      ]),
    ]),
  ]),
  trigger('box', [
    transition(':enter', [
      style({
        transform: 'scale(0.7)',
      }),
      animate('100ms ease-out', style({
        transform: 'scale(1.1)',
      })),
      animate('100ms ease-out', style({
        transform: 'scale(1)',
      })),
    ]),
  ]),
  trigger('backdrop', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('85ms ease-in', style({
        opacity: 1,
      })),
    ]),
  ]),
];

@Component({
  template: `
      <div class="modal is-active">
          <div class="modal-background" [@backdrop] (click)="close()"></div>
          <div [@box]>
              <ng-template #modalContainer></ng-template>
          </div>
      </div>
  `,
  animations,
})
export class ModalContainerComponent implements ModalContainer, OnDestroy {

  @HostBinding('@host')
  host: any;

  @ViewChild('modalContainer', {read: ViewContainerRef})
  container!: ViewContainerRef;

  context!: ModalContext<any>;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.doc.documentElement.classList.add('is-clipped');
  }

  close() {
    return this.context?.close()
  }

  ngOnDestroy() {
    this.doc.documentElement.classList.remove('is-clipped');
  }
}
