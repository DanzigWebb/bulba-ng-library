import { Component, OnInit } from '@angular/core';
import { ModalContext, ModalService } from "../../../projects/am-bulba/src/lib/modal";

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {

  dialogCheckedItem = '';

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  add() {
    const modalTitle = 'Check your item';
    const openedModal = this.modalService.open<string>(ExampleDialog, modalTitle);

    openedModal.subscribe((checkedItem) => {
      this.dialogCheckedItem = checkedItem;
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
