import { Component, Input, OnInit } from '@angular/core';
import { TechnicalBulletin } from 'src/app/models/technical-bulletin';
import { Clipboard } from "@angular/cdk/clipboard"
import { MatDialog } from '@angular/material/dialog';
import { RefsDialogComponent } from '../refs-dialog/refs-dialog.component';

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

  }
  currentRefs:string[]=[];
  constructor(private clipboard: Clipboard,public dialog: MatDialog) { }

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
open(){
  const dialogRef = this.dialog.open(RefsDialogComponent, {

    data: {refs: this.currentRefs}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}

}
