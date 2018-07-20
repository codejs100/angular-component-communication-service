import { Injectable, EventEmitter } from '@angular/core';


export class CommunicationService {

  constructor() { }

  pushedData = new EventEmitter<string>();

  getPushData(value: string) {
    this.pushedData.emit(value);
  }

}
