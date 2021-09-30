import { ComponentRef, Injectable, Type, ViewContainerRef } from "@angular/core";

@Injectable()
export class ModalContext<T> {

  componentRef!: ComponentRef<Type<any>>;
  containerRef!: ViewContainerRef;

  data?: T;

  private _resolve!: Function;
  private _reject!: Function;
  private _promise!: Promise<any>;

  constructor() { }

  private hide() {
    setTimeout(() => {
      this.containerRef.remove(0);
      this.componentRef.destroy();
    }, 130)

  }

  resolve(...args: any[]) {
    this.hide();
    this._resolve(...args);
  }

  reject(reason: any) {
    this.hide();
    this._reject(reason);
  }

  promise(componentRef: ComponentRef<Type<any>>, containerRef: ViewContainerRef):Promise<any> {
    return this._promise || (this._promise = new Promise((resolve, reject) => {
      this.componentRef = componentRef;
      this.containerRef = containerRef;
      this._resolve = resolve;
      this._reject = reject;
    }));
  }

}
