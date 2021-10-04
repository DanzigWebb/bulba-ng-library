import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { TabsPositionType, TabsSizeType, TabsViewType } from "../../projects/am-bulba/src/lib/tabs";
import { ToggleButtonsEvent } from "../../projects/am-bulba/src/lib/toggle-buttons";
import { ModalContext, ModalService } from "../../projects/am-bulba/src/lib/modal";
import { CardComponent } from "../../projects/am-bulba/src/lib/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  @ViewChild('card') card!: CardComponent;

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
    private modalService: ModalService,
  ) {
    this.control.valueChanges.subscribe(data => {
      console.log('valueChanges subscribe:', data);
    });
  }

  dialogCheckedItem = '';

  add() {
    const modalTitle = 'Check your item';
    const openedModal = this.modalService.open<string>(ExampleDialog, modalTitle);

    openedModal.subscribe((checkedItem) => {
      this.dialogCheckedItem = checkedItem;
    });
  }

  inputControl = new FormControl();
  inputLoading = false;

  // select
  selectControl = new FormControl('', Validators.required);

  onSelectChange($event: any) {
    console.log('select changes:', $event);
  }

  // Card
  isExpand = true;
  isCanExpand = true;

  onSubmitAction() {
    const dialog$ = this.modalService.open(SubmitDialog);
    dialog$.subscribe(s => {
      if (s) {
        this.card.expand = false;
      }
    });
  }
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


@Component({
  template: `
      <div class="modal-content">
          <header class="modal-card-head">
              <p class="modal-card-title">Submit Action</p>
          </header>
          <div class="modal-card-body">
              Are you sure you want to delete this?
          </div>

          <footer class="modal-card-foot">
              <button class="button is-success" (click)="submit()">Submit</button>
              <button class="button" (click)="close()">Cancel</button>
          </footer>
      </div>
  `,
})
export class SubmitDialog {
  constructor(
    public context: ModalContext<string>,
  ) {
  }

  close() {
    this.context.close(false);
  }

  submit() {
    this.context.close(true);
  }
}
