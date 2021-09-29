import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogService } from "./dialog.service";

@NgModule({
  declarations: [
    DialogContainerComponent,
  ],
  providers: [
    DialogService,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    DialogContainerComponent,
  ],
})
export class DialogModule {
}
