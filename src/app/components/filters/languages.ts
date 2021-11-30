import { eLanguage } from "src/app/models/response"

export interface language {
    id : number
    label : string;
    language : eLanguage;

}


export const languages :language[] = [
    {id : 1 , label : "Français" , language : eLanguage.FR},
    {id : 2 , label : "Arabe" , language : eLanguage.AR},
    {id : 3 , label : "Espagnol" , language : eLanguage.ES},
    {id : 4 , label : "Anglais" , language : eLanguage.EN},
    {id : 5 , label : "Allemand" , language : eLanguage.DE}
]
    
