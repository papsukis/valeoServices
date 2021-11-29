import { FittingInstruction } from "./fitting-instructions";
import { TechnicalBulletin } from "./technical-bulletin";
import { TechnicalDocument } from "./technical-document";

export class ValeoResponse{
  version : string="";
  lang :eLanguage =eLanguage.FR;
  page: number = 0;
  total_results : TotalResults=new TotalResults();
  technical_document:TechnicalDocument[]=[]
  technical_bulletin:TechnicalBulletin[]=[]
  fitting_instruction:FittingInstruction[]=[]
}

class TotalResults{
  technicalDocument :number =0;
  technicalBulletin : number = 0;
  fittingInstruction : number =0;
}

export enum eLanguage{
EN= "en",
DE="de",
FR="fr",
ES="es",
IT="it",
NL="nl",
PT="pt",
PL="pl",
ru="ru",
TR="tr",
CS="cs",
TH="th",
AR="ar"
}
