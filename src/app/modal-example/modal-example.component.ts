import { Component, OnInit } from '@angular/core';
import { ExampleDialog } from "../app.component";
import { ModalService } from "../../../projects/am-bulba/src/lib/modal";

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
