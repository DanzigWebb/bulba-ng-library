import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'div[amCardContent]',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContentComponent implements OnInit, AfterViewInit {

  @ViewChild('content') ref!: ElementRef<HTMLElement>;

  height$ = new Subject<string>();

  get scrollHeight() {
    return this.ref?.nativeElement.scrollHeight + 'px';
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.height$.next(this.scrollHeight);
  }

  expand() {
    this.height$.next(this.scrollHeight)
  }

  collapse() {
    this.height$.next('0');
  }
}
