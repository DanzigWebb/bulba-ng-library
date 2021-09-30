import { Component, ViewEncapsulation } from '@angular/core';
import { ToggleButtonsEvent } from "../../projects/am-bulba/src/lib/toggle-buttons/toggle-buttons-group.directive";
import { FormControl } from "@angular/forms";
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../projects/am-bulba/src/lib/tabs/tabs.type";
import { DialogService } from "../../projects/am-bulba/src/lib/dialog/dialog.service";
import { ModalService } from "../../projects/am-bulba/src/lib/modal/modal.service";
import { ModalContext } from "../../projects/am-bulba/src/lib/modal/modal-context.model";

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
    private modalService: ModalService,
  ) {
    this.control.valueChanges.subscribe(data => {
      console.log('valueChanges subscribe:', data);
    });
  }

  async add() {
    console.log(await this.modalService.open(ExampleDialog, 'content of dialog'));
  }
}

@Component({
  template: `
      <div class="modal-content">
          <div class="card">
              <div class="card-content">
                  {{context.data}}
              </div>
              <am-panel>
                  <am-panel-block>
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span> bulma
                  </am-panel-block>
                  <am-panel-block>
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span> marksheet
                  </am-panel-block>
              </am-panel>
          </div>
      </div>
      <button class="modal-close is-large" aria-label="close" (click)="close()"></button>
  `,
})
export class ExampleDialog {
  title = '';

  constructor(
    public context: ModalContext<any>,
  ) {
  }

  close() {
    this.context.resolve('');
  }
}
