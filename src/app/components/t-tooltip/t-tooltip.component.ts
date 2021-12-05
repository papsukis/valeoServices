import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 't-tooltip',
  templateUrl: './t-tooltip.component.html',
  styleUrls: ['./t-tooltip.component.scss']
})
export class TTooltipComponent implements OnInit {

  @Input() tooltip : string='';

  constructor() { }

  ngOnInit(): void {
  }

}
