import { eLanguage } from "./response";
import { eSearchType } from "./search-type";

export class ValeoRequest{
  format:string=""
  page:number=1;
  lang:string=eLanguage.FR;
  params:string[]=[];
  searchType:eSearchType=eSearchType.REF
}
