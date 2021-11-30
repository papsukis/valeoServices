import { Component, Input, OnInit } from '@angular/core';
import { TechnicalDocument } from 'src/app/models/technical-document';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'technical-document-card',
  templateUrl: './technical-document-card.component.html',
  styleUrls: ['./technical-document-card.component.scss']
})
export class TechnicalDocumentCardComponent implements OnInit {

  refSearch:string=""

  technicalDocument : TechnicalDocument=new TechnicalDocument()
  @Input() set technicalDoc(value: TechnicalDocument) {
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
