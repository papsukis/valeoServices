export class FittingInstruction{
id : string="";
product : string="";
component : string="";
brand: string="";
refs :string[]=[];
title : string="";
snippet : Snippet=new Snippet();
documents: string="";
url: string="";
}
export class Snippet{
  fi_applications : string="";
  fi_caution:string="";
  fi_fitting_instructions:string="";
  fi_after_the_assembly : string=""
}
