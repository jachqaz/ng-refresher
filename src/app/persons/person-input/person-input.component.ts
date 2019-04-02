import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  enteredPersonName = '';
  constructor() {
  }

  ngOnInit() {
  }

  onCreatePerson() {
    console.log('Created a Person ' + this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
