import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setData(keyName,data) {
    let events = JSON.parse(localStorage.getItem(keyName));
    if(events) {
      events.push(data);
    } else {
      events = [];
      events.push(data);
    }
    localStorage.setItem(keyName, JSON.stringify(events));
  }

  getData(keyName) {
    return localStorage.getItem(keyName);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

}
