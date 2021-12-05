import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

interface Page{
  page : number[]
}

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() size :number=0;
  @Input() numberPerPage : number =12;
  numberOfPage : number = 0;
  @Input() currentPage : number = 1;
  pageList : number[]=[];

  @Output() onClick : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.numberOfPage=Math.ceil(this.size/this.numberPerPage);
    this.pageList=[]
    for(let i=1;i<=this.numberOfPage;i++)
    {
      this.pageList.push(i);
    }
  }

  precedent(){
    this.currentPage--;
    this.onClick.emit(this.currentPage);
  }
  next(){
    this.currentPage++;
    this.onClick.emit(this.currentPage);
  }

  goTo(){
    // this.currentPage=page;
    this.onClick.emit(this.currentPage);
  }
  goToPage(page:number){
    this.currentPage=page;
    this.onClick.emit(this.currentPage);
  }
}
