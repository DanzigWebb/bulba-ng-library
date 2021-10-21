import { Component, OnInit } from '@angular/core';
import { ModalContext, ModalService } from "../../../projects/am-bulba/src/lib/modal";

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  open() {
    const modalTitle = 'Check your item';
    const openedModal = this.modalService.open<string>(ExampleDialog, modalTitle);

    openedModal.subscribe(() => {
      console.log('is closed!');
    });
  }

}



@Component({
  template: `
      <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
      <div class="modal-action">
          <label for="my-modal-2" class="btn btn-primary" (click)="close()">Accept</label>
          <label for="my-modal-2" class="btn" (click)="close()">Close</label>
      </div>
  `,
})
export class ExampleDialog {
  title = '';

  constructor(
    public context: ModalContext<string>
  ) {
  }

  close() {
    this.context.close('');
  }
}
