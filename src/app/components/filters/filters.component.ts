import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  referenceName:string="";
  productName:string="";
  productFamily:string="";
  lineOfBusiness:string="";
  @Output() searchByReference : EventEmitter<string> =new EventEmitter();
  @Output() searchByProductName : EventEmitter<string> =new EventEmitter();
  @Output() searchByProductFamily : EventEmitter<string> =new EventEmitter();
  @Output() searchByLineOfBusiness : EventEmitter<string> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSearchByReference(){
    this.searchByReference.emit(this.referenceName)

  }
  onSearchByProductName(){
    this.searchByProductName.emit(this.productName)
  }
  onSearchByProductFamily(){
    this.searchByProductFamily.emit(this.productFamily)
  }
  onSearchByLineOfBusiness(){
    this.searchByLineOfBusiness.emit(this.lineOfBusiness)
  }

  // converter(stringToConvert:string):string{
  //   return stringToConvert.
  // }
}
