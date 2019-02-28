import { Component, OnInit } from '@angular/core';
import { Events, Guests } from '../event';
import { DelegatorService } from '../services/delegator.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-event-add-edit',
  templateUrl: './event-add-edit.component.html',
  styleUrls: ['./event-add-edit.component.css']
})
export class EventAddEditComponent implements OnInit {

  events: Events;
  constructor(
    private delegatorService: DelegatorService,
    private localStorage: LocalStorageService
  ) { 
    this.events = new Events();
    this.events.guestList = [];
    // const guest = new Guests();
    this.events.guestList.push(new Guests());
  }

  ngOnInit() {
    
  }

  submitForm() {
    /* console.log(this.events);
    const result = this.delegatorService.getLocationApiResults();
    console.log(result); */
    this.localStorage.setData("events",this.events);
    setTimeout(() => {
      const result = this.localStorage.getData("events");
      console.log(JSON.parse(result));
    }, 100);
  }

  addGuest() {
    // const guest = new Guests();
    this.events.guestList.push(new Guests());
  }

  clearLocalStorage() {
    this.localStorage.clearLocalStorage();
  }
}
