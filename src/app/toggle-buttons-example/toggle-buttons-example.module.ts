import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';
import { ToggleButtonsModule } from "../../../projects/am-bulba/src/lib/toggle-buttons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ToggleButtonsExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToggleButtonsModule,
  ],
  exports: [
    ToggleButtonsExampleComponent
  ]
})
export class ToggleButtonsExampleModule { }
