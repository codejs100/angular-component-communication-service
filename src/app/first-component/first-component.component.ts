import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor(private _CommunicationService: CommunicationService) { }

  ngOnInit() {
  }

  sendMessage(value) {
    this._CommunicationService.getPushData(value);
  }

}
