import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuExampleComponent } from './menu-example.component';
import { MenuModule } from "../../../projects/am-bulba/src/lib/menu";
import { FormGroupModule } from "../../../projects/am-bulba/src/lib/form-field";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    MenuExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    FormGroupModule,
  ],
  exports: [
    MenuExampleComponent
  ]
})
export class MenuExampleModule { }
