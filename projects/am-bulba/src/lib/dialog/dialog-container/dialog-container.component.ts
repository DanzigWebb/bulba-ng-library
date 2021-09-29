import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Dialog } from "../models/dialog.model";

type DialogInstanceType<T extends Dialog> = ComponentRef<T>;

@Component({
  template: `
      <div class="modal is-active" (keyup.escape)="backgroundClose()">
          <div class="modal-background" (click)="backgroundClose()"></div>
          <ng-template #modalContainer></ng-template>
      </div>
  `,
})
export class DialogContainerComponent {

  private componentInstance!: DialogInstanceType<any>;

  @ViewChild('modalContainer', {read: ViewContainerRef})
  private modalContainer!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  createModal<T extends Dialog>(component: Type<T>): ComponentRef<T> {
    this.modalContainer.clear();

    const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentInstance = this.modalContainer.createComponent(factory, 0);
    return this.componentInstance;
  }

  backgroundClose() {
    this.componentInstance.instance.close();
  }
}
