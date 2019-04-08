import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) {
  }

  ngOnInit() {
    this.prsService.fetchPersons();
    this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }
}
