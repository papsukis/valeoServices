import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ValeoResponse } from 'src/app/models/response';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() resultsList : ValeoResponse=new ValeoResponse();
  @Input() currentPage: number=1;
  @Output() scrollEvent : EventEmitter<string> =new EventEmitter();
  @Output() onClick : EventEmitter<number> = new EventEmitter();
  currentSection = 'technical_document';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.scrollToTop();
  }
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  isEmpty(){

    return (this.resultsList.technical_bulletin && this.resultsList.technical_bulletin.length==0) && (this.resultsList.technical_document && this.resultsList.technical_document.length==0) && (this.resultsList.fitting_instruction && this.resultsList.fitting_instruction.length==0)
  }

  @ViewChild("top") top!: ElementRef;
  scrollToTop(){
    // this.top.nativeElement.offsetHeight=0;
    // this.top.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    const el: HTMLElement|null = document.getElementById('top');

    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }

  }
  pageChanged(page:number){
    this.scrollToTop()
    this.onClick.emit(page);
  }
}
