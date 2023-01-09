import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  person = [
    { name: 'Junu', address: 'Biratnagar', email: 'junu.danuwar@f1soft.com' },
    {
      name: 'Anisha',
      address: 'Biratnagar',
      email: 'anisha.khatiwada@f1soft.com',
    },
  ];
  users = [];

  onSubmit(username) {
    this.users.push({
      name: username.value,
    });
  }
  onRemove() {
    this.users.splice(this.users.length - 1);
  }
  onRemoveItem(item) {
    this.users.splice(item, 1);
  }
}
