import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injectable, Type } from '@angular/core';
import { DialogContainerComponent } from "./dialog-container/dialog-container.component";
import { Dialog } from "./models/dialog.model";
import { DialogRef } from "./models/dialog-ref.model";

@Injectable({
  providedIn: 'root'
})
export class DialogService {


  private modalContainer!: HTMLElement;
  private modalContainerFactory!: ComponentFactory<DialogContainerComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {
    this.setupModalContainerFactory();
  }

  open<T extends Dialog>(component: Type<T>, inputs?: any): DialogRef {
    this.setupModalContainerDiv();

    const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);

    const modalComponentRef = modalContainerRef.instance.createModal(component);

    if (inputs) {
      modalComponentRef.instance.onInjectInputs(inputs);
    }

    return new DialogRef(modalContainerRef, modalComponentRef);
  }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }

  private setupModalContainerFactory(): void {
    this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(DialogContainerComponent);
  }
}
