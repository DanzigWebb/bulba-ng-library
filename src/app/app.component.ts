import { Component, ViewEncapsulation } from '@angular/core';
import { ToggleButtonsEvent } from "../../projects/am-bulba/src/lib/toggle-buttons/toggle-buttons-group.directive";
import { FormControl } from "@angular/forms";
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../projects/am-bulba/src/lib/tabs/tabs.type";
import { DialogService } from "../../projects/am-bulba/src/lib/dialog/dialog.service";
import { Dialog } from "../../projects/am-bulba/src/lib/dialog/models/dialog.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'am-bulbalar';

  control = new FormControl(['left', 'right']);

  buttons = [
    {
      title: 'left',
      checked: false,
    },
    {
      title: 'center',
      checked: false,
      disabled: true,
    },
    {
      title: 'right',
      checked: true,
    },
  ];

  // Tabs
  position: TabsPositionType | undefined;
  size: TabsSizeType | undefined;
  viewType: TabsViewType | undefined;
  rounded = false;

  onChange(event: ToggleButtonsEvent) {
    console.log('onChange event:', event);
  }

  constructor(
    private dialog: DialogService,
  ) {
    this.control.valueChanges.subscribe(data => {
      console.log('valueChanges subscribe:', data);
    });
  }

  open() {
    const text = 'First Dialog.';
    this.dialog.open(ExampleDialog, text);
  }
}

@Component({
  template: `
      <div class="modal-content">
          <div class="card">
              <div class="card-content">
                  {{title}}
              </div>
              <button class="button" (click)="open()">Open dialog</button>
          </div>
      </div>
      <button class="modal-close is-large" aria-label="close" (click)="close()"></button>
  `,
})
export class ExampleDialog extends Dialog {
  title = '';

  constructor(
    private dialog: DialogService,
  ) {super();}

  onInjectInputs(title: string): void {
    this.title = title;
  }

  close(output?: any) {
    super.close(output);
  }

  open() {
    const text = 'Second Dialog.';
    this.dialog.open(ExampleDialog, text);
  }
}
