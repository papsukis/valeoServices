import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'app-refs-dialog',
  templateUrl: './refs-dialog.component.html',
  styleUrls: ['./refs-dialog.component.scss']
})
export class RefsDialogComponent implements OnInit {

  refSearch:string=""
  currentRefs:string[]=[];
  refs:string[]=[]
  currentPage:number=1;
  filteredRefs : string[]=[];
  numberPerPage:number=40;
  constructor(
    private clipboard: Clipboard,
    public dialogRef: MatDialogRef<RefsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {refs : string[]}
  ) {

    this.refs=data.refs
    this.filteredRefs=this.refs
    this.currentRefs=data.refs.splice(this.currentPage-1,this.numberPerPage);
   }
   search(searchTerm : string){
     this.currentPage=1;
     this.filteredRefs=this.refs.filter(x=>x.includes(searchTerm))
    this.currentRefs=this.filteredRefs.splice(0,this.numberPerPage)
  }
  copyToClipboard(ref:string){
    this.clipboard.copy(ref);
  }
  ngOnInit(): void {
  }
  pageChanged(page:number){
    this.currentPage=page;
    this.filteredRefs=this.refSearch.length>0?this.refs.filter(x=>x.includes(this.refSearch)):this.refs
    this.currentRefs=this.filteredRefs.splice(this.currentPage,this.numberPerPage)
  }
}
