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

  dialogCheckedItem = ''

  add() {
    const modalTitle = 'Check your item';
    const openedModal = this.modalService.open<string>(ExampleDialog, modalTitle);

    openedModal.subscribe((checkedItem) => {
      this.dialogCheckedItem = checkedItem;
    });
  }

  inputControl = new FormControl('')
  inputLoading = false;
}

@Component({
  template: `
      <div class="modal-content">
          <header class="modal-card-head">
              <p class="modal-card-title">{{context.data}}</p>
              <button class="delete" aria-label="close" (click)="close()"></button>
          </header>
          <div class="card">
              <am-panel>
                  <am-panel-block (click)="closeWithData('bulma')">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span> <span>bulma</span>
                  </am-panel-block>
                  <am-panel-block (click)="closeWithData('marksheet')">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span> <span>marksheet</span>
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
    public context: ModalContext<string>,
  ) {
  }

  closeWithData(data: string) {
    this.context.close(data);
  }

  close() {
    this.context.close('');
  }
}
