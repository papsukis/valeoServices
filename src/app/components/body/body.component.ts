import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValeoRequest } from 'src/app/models/request';
import { eLanguage, ValeoResponse } from 'src/app/models/response';
import { ValeoService } from 'src/app/services/valeo.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  request:ValeoRequest=new ValeoRequest();
  referenceName:string=""
  result: ValeoResponse=new ValeoResponse();
  constructor(protected valeoService:ValeoService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSearchByReference(reference:string){
    let req=new ValeoRequest();
    req.params=this.separateString(reference)
    req.page=1
    req.lang=eLanguage.FR
    this.spinner.show();
    this.valeoService.getByReference(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()
    })
  }
  onSearchByProductName(productName:string){
    let req=new ValeoRequest();
    req.params=this.separateString(productName)
    req.page=1
    req.lang=eLanguage.FR
    this.spinner.show();

    this.valeoService.getByProductName(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()

    })
  }
  onSearchByProductFamily(productFamily:string){
    let req=new ValeoRequest();
    req.params=this.separateString(productFamily)
    req.page=1
    req.lang=eLanguage.FR
    this.spinner.show();

    this.valeoService.getByProductFamily(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()

    })

  }
  onSearchByLineOfBusiness(lineOfBusiness:string){
    let req=new ValeoRequest();
    req.params=this.separateString(lineOfBusiness)
    req.page=1
    req.lang=eLanguage.FR
    this.spinner.show();

    this.valeoService.getByLineOfBusiness(req).subscribe(response=>{
      this.result=response;
      this.spinner.hide()

    })
  }
  separateString(stringToConvert: string) :string[]{
    return stringToConvert.split('-').join(',').split('/').join(',').split(',')
  }


}
