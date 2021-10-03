import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { AM_CARD, CardComponent } from "../card.component";
import { Subject } from "rxjs";

@Component({
  selector: 'header[amCardHeader]',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'card-header',
  },
})
export class CardHeaderComponent implements OnInit {

  isExpand$ = new Subject<boolean>();

  get expand() {
    return this.card.expand;
  }

  constructor(
    @Optional() @Inject(AM_CARD) public card: CardComponent,
  ) { }

  ngOnInit(): void {
    this.isExpand$.next(this.expand);
  }

  toggle() {
    const isExpand = this.expand;
    this.isExpand$.next(isExpand);
    isExpand
      ? this.card.collapsedContent()
      : this.card.expandContent();
  }
}
