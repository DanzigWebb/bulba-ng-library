import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsExampleComponent } from './tabs-example.component';
import { TabsModule } from "../../../projects/am-bulba/src/lib/tabs";
import { ToggleButtonsModule } from "../../../projects/am-bulba/src/lib/toggle-buttons";



@NgModule({
  declarations: [
    TabsExampleComponent
  ],
  imports: [
    CommonModule,
    TabsModule,
    ToggleButtonsModule,
  ],
  exports: [
    TabsExampleComponent
  ]
})
export class TabsExampleModule { }
