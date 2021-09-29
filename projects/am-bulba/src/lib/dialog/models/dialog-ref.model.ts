import { Observable, Subject } from "rxjs";
import { ComponentRef } from "@angular/core";
import { DialogContainerComponent } from "../dialog-container/dialog-container.component";
import { Dialog } from "./dialog.model";


export class DialogRef {

  private result$ = new Subject<any>();

  constructor(
    private modalContainer: ComponentRef<DialogContainerComponent>,
    private modal: ComponentRef<Dialog>,
  ) {
    this.modal.instance.modalInstance = this;
  }

  close(output: any): void {
    this.result$.next(output);
    this.destroy$();
  }

  dismiss(output: any): void {
    this.result$.error(output);
    this.destroy$();
  }

  onResult(): Observable<any> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.modal.destroy();
    this.modalContainer.destroy();
    this.result$.complete();
  }

}
