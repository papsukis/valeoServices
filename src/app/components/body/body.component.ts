import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { ValeoRequest } from 'src/app/models/request';
import { eLanguage, ValeoResponse } from 'src/app/models/response';
import { eSearchType } from 'src/app/models/search-type';
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
  currentReq : BehaviorSubject<ValeoRequest>=new BehaviorSubject(new ValeoRequest())
  selectedLanguage : language = languages[0];
  searchType:eSearchType=eSearchType.NAME;
  constructor(protected valeoService:ValeoService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  @ViewChild("top") top!: ElementRef;
  scrollTo(section:string) {
    this.top.nativeElement
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
      req.searchType=eSearchType.REF
      this.currentReq.next(req)
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
      req.searchType=eSearchType.NAME
      this.currentReq.next(req)
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
      req.searchType=eSearchType.FAMILY
      this.currentReq.next(req)
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
      req.searchType=eSearchType.LOB
      this.currentReq.next(req)
      this.spinner.hide()

    },()=>{this.spinner.hide(),()=>this.spinner.hide()})
  }
  separateString(stringToConvert: string) :string[]{
    return stringToConvert.split('-').join(',').split('/').join(',').split(',')
  }

  onSelectLanguage(language : language){

    this.selectedLanguage=language;

  }
  pageChanged(page:number){
    console.log(page)
    console.log(this.currentReq.value)
    let req=this.currentReq.value;
    req.page=page
    this.spinner.show();
    switch (req.searchType){
      case eSearchType.REF:{
        this.valeoService.getByReference(req).subscribe(response=>{
        this.result=response;
        req.searchType=eSearchType.REF
        this.currentReq.next(req)
        this.spinner.hide()
      },()=>{this.spinner.hide(),()=>this.spinner.hide()})
      break; }
    case eSearchType.NAME:{
      this.valeoService.getByProductName(req).subscribe(response=>{
        this.result=response;
        req.searchType=eSearchType.NAME
        this.currentReq.next(req)
        this.spinner.hide()

      },()=>{this.spinner.hide(),()=>this.spinner.hide()})
      break;
    }
    case eSearchType.FAMILY:{
      this.valeoService.getByProductFamily(req).subscribe(response=>{
        this.result=response;
        req.searchType=eSearchType.FAMILY
        this.currentReq.next(req)
        this.spinner.hide()

      },()=>{this.spinner.hide(),()=>this.spinner.hide()})
      break;
    }
    case eSearchType.LOB:{
      this.valeoService.getByLineOfBusiness(req).subscribe(response=>{
        this.result=response;
        req.searchType=eSearchType.LOB
        this.currentReq.next(req)
        this.spinner.hide()

      },()=>{this.spinner.hide(),()=>this.spinner.hide()})
      break;
    }

    }
  }
}
