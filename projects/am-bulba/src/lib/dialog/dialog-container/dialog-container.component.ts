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

@Component({
  template: `
      <div class="modal is-active">
          <div class="modal-background"></div>
          <ng-template #modalContainer></ng-template>
      </div>
  `,
})
export class DialogContainerComponent {

  @ViewChild('modalContainer', {read: ViewContainerRef})
  private modalContainer!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  createModal<T extends Dialog>(component: Type<T>): ComponentRef<T> {
    this.modalContainer.clear();

    const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(component);

    return this.modalContainer.createComponent(factory, 0);
  }

}
