import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionExampleComponent } from './accordion-example.component';
import { AccordionModule } from "../../../projects/am-bulba/src/lib/accordion/accordion.module";



@NgModule({
  declarations: [
    AccordionExampleComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ]
})
export class AccordionExampleModule { }
