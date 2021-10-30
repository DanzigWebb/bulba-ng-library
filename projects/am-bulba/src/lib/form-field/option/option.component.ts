import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  InjectionToken,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { AmOptionGroup } from './option.group';

export const AM_OPTION_GROUP = new InjectionToken<AmOptionGroup>('AmOptionGroup');

@Component({
  selector: 'am-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent implements OnInit {

  @Input() checked = false;
  @Input() value = '';

  constructor(
    @Optional() @Inject(AM_OPTION_GROUP) public group: AmOptionGroup,
    private cdRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
  }

  onClick($event: MouseEvent) {
    $event.preventDefault();
    if (this.group) {
      this.group.onOptionCheck(this);
    }
  }

  markForCheck() {
    this.cdRef.markForCheck();
  }
}
