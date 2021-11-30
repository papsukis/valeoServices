import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { eLanguage } from 'src/app/models/response';
import { language, languages } from './languages';

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
  languages : language[] = languages;
  selectedLanguage : language = languages[0];
  readonly iLanguages =eLanguage;
  @Output() selectLanguage : EventEmitter<language> =new EventEmitter();
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

  onSelectLanguage(event : any){
    console.log(this.selectedLanguage)
    this.selectLanguage.emit(this.selectedLanguage)
  }

}
