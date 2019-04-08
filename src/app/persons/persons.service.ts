import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  constructor() {
  }

  addPersob(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }
}
