import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValeoRequest } from 'src/app/models/request';
import { eLanguage, ValeoResponse } from 'src/app/models/response';
import { ValeoService } from 'src/app/services/valeo.service';
import { language, languages } from '../filters/languages';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  request:ValeoRequest=new ValeoRequest();
  referenceName:string=""
  result: ValeoResponse=new ValeoResponse();
  selectedLanguage : language = languages[0];
  constructor(protected valeoService:ValeoService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  scrollTo(section:string) {
    let el=document.getElementById('element_within_div')
    document.getElementById('scrolling_div')!
    .scrollIntoView();
  }

  onSearchByReference(reference:string){
    let req=new ValeoRequest();
    req.params=this.separateString(reference)
    req.page=1
    req.lang=this.selectedLanguage.language
    this.spinner.show();
    this.valeoService.getByReference(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()
    },()=>{this.spinner.hide(),()=>this.spinner.hide()})
  }
  onSearchByProductName(productName:string){
    let req=new ValeoRequest();
    req.params=this.separateString(productName)
    req.page=1
    req.lang=this.selectedLanguage.language
    this.spinner.show();

    this.valeoService.getByProductName(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()

    },()=>{this.spinner.hide(),()=>this.spinner.hide()})
  }
  onSearchByProductFamily(productFamily:string){
    let req=new ValeoRequest();
    req.params=this.separateString(productFamily)
    req.page=1
    req.lang=this.selectedLanguage.language
    this.spinner.show();

    this.valeoService.getByProductFamily(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()

    },()=>{this.spinner.hide(),()=>this.spinner.hide()})

  }
  onSearchByLineOfBusiness(lineOfBusiness:string){
    let req=new ValeoRequest();
    req.params=this.separateString(lineOfBusiness)
    req.page=1
    req.lang=this.selectedLanguage.language;
    this.spinner.show();

    this.valeoService.getByLineOfBusiness(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()

    },()=>{this.spinner.hide(),()=>this.spinner.hide()})
  }
  separateString(stringToConvert: string) :string[]{
    return stringToConvert.split('-').join(',').split('/').join(',').split(',')
  }

  onSelectLanguage(language : language){

    this.selectedLanguage=language;
    console.log(this.selectedLanguage)
  }

}
