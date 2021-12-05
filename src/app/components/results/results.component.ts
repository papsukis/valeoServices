import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValeoResponse } from 'src/app/models/response';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() resultsList : ValeoResponse=new ValeoResponse();
  @Output() scrollEvent : EventEmitter<string> =new EventEmitter();
  currentSection = 'technical_document';
  constructor() { }

  ngOnInit(): void {
  }
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section:string) {
    this.scrollEvent.emit(section)
    // document.querySelector('#' + section)!
    // .scrollIntoView();
  }
}
