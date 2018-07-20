import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  data: string;
  constructor(private _CommunicationService: CommunicationService) { }

  ngOnInit() {
    this._CommunicationService.pushedData.subscribe(
      response => this.data = response
    )
  }

}
