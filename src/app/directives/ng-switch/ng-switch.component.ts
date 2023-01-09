import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  selectedAddress: string;
  constructor() {}

  ngOnInit() {}
  getValue(val) {
    console.log(val.target.value);
    this.selectedAddress = val.target.value;
  }
}
