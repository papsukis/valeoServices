import { Component, Input, OnInit } from '@angular/core';
import { FittingInstruction } from 'src/app/models/fitting-instructions';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'fitting-instructions-card',
  templateUrl: './fitting-instructions-card.component.html',
  styleUrls: ['./fitting-instructions-card.component.scss']
})
export class FittingInstructionsCardComponent implements OnInit {


  refSearch:string=""

  technicalDocument : FittingInstruction=new FittingInstruction()
  @Input() set technicalDoc(value: FittingInstruction) {
    this.technicalDocument = value;
    this.currentRefs=value.refs;

  }
  currentRefs:string[]=[];
  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyToClipboard(ref:string){
    this.clipboard.copy(ref);
  }
  search(searchTerm : string){
    this.currentRefs=this.technicalDocument.refs.filter(x=>x.includes(searchTerm))
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
