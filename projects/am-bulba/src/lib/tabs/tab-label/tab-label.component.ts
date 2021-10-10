import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'am-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabLabelComponent implements OnInit, AfterContentInit {

  @ViewChild(TemplateRef) labelContent: TemplateRef<any> | undefined;

  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.cdRef.detectChanges();
  }
}
