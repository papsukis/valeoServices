import { Component, Input, OnInit } from '@angular/core';
import { ValeoResponse } from 'src/app/models/response';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() resultsList : ValeoResponse=new ValeoResponse();

  constructor() { }

  ngOnInit(): void {
  }

}
