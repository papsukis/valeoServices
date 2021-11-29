import { eLanguage } from "./response";

export class ValeoRequest{
  format:string=""
  page:number=1;
  lang:string=eLanguage.FR;
  params:string[]=[];
}
