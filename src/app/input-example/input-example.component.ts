import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent implements OnInit {

  control = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

}
