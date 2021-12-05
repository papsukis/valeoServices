import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 't-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class TSelectComponent implements OnInit {
  @Input() selectedOption : any;
  @Input() options: any[]=[];
  @Output() newvalue : EventEmitter<any>=new EventEmitter;

  constructor() { }


  ngOnInit(): void {
  }

}
