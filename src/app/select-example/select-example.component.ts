import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent implements OnInit {

  select = new FormControl('Center', Validators.required);

  multipleSelect = new FormControl(null, Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: any) {
    console.log('select changes:', $event);
  }

}
