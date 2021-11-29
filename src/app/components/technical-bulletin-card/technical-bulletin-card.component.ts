import { Component, Input, OnInit } from '@angular/core';
import { TechnicalBulletin } from 'src/app/models/technical-bulletin';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'technical-bulletin-card',
  templateUrl: './technical-bulletin-card.component.html',
  styleUrls: ['./technical-bulletin-card.component.scss']
})
export class TechnicalBulletinCardComponent implements OnInit {

  refSearch:string=""

  technicalDocument : TechnicalBulletin=new TechnicalBulletin()
  @Input() set technicalDoc(value: TechnicalBulletin) {
    this.technicalDocument = value;
    this.currentRefs=value.refs;
    console.log(value)
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
