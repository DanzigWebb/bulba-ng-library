import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accordion, AccordionContent, AccordionHeader } from './accordion';


@NgModule({
  declarations: [
    Accordion,
    AccordionHeader,
    AccordionContent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Accordion,
    AccordionHeader,
    AccordionContent,
  ],
})
export class AccordionModule {
}
