import { AfterContentInit, Component, ContentChild, InjectionToken, Input, OnInit } from '@angular/core';
import { CardContentComponent } from "./card-content/card-content.component";

export const AM_CARD = new InjectionToken<CardComponent>('AmCard');

@Component({
  selector: 'am-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [
    {
      provide: AM_CARD,
      useExisting: CardComponent,
    },
  ],
})
export class CardComponent implements OnInit, AfterContentInit {

  @ContentChild(CardContentComponent) cardContent!: CardContentComponent;

  @Input() expand = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
  }

  expandContent() {
    this.expand = true;
    this.cardContent.expand();
  }

  collapsedContent() {
    this.expand = false;
    this.cardContent.collapse();
  }
}
