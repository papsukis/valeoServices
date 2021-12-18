import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TotalResults } from 'src/app/models/response';

@Component({
  selector: 'footer-pagination',
  templateUrl: './footer-pagination.component.html',
  styleUrls: ['./footer-pagination.component.scss']
})
export class FooterPaginationComponent implements OnInit {

  maxResults:number=0;
  @Input()currentPage:number=1;
  totalResult : TotalResults=new TotalResults();
  @Output() onClick : EventEmitter<number> = new EventEmitter();

  @Input() set totalResults(value: TotalResults) {
    this.maxResults=value.technical_document;
    if(value.technical_bulletin>this.maxResults)
    this.maxResults=value.technical_bulletin
    if(value.fitting_instruction>this.maxResults)
    this.maxResults=value.fitting_instruction
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
    let newResults : TotalResults=changes.totalResults.currentValue
    let oldResults : TotalResults=changes.totalResult.previousValue
    if(changes.totalResults){
    this.maxResults=newResults.technical_document;
    if(newResults.technical_bulletin>this.maxResults)
    this.maxResults=newResults.technical_bulletin
    if(newResults.fitting_instruction>this.maxResults)
    this.maxResults=newResults.fitting_instruction}
    if(newResults.technical_document!= oldResults.technical_document){
      this.currentPage=1;
    }
  }
  pageChanged(page:number){
    this.currentPage=1;
    this.onClick.emit(page)
  }

}
