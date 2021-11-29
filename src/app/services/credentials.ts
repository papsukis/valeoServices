export const credentials:Credentials={
  clientId : "b562b77b-8596-431e-a9d5-f3bbeab935ad",
  password : "UdcGySNaO97yqkst",
  grantType : "client_credentials"

}

export interface Credentials{
  clientId:string;
  password:string;
  grantType:string;
}

export const tokenUrl:string = "https://api.valeoservice.com/oauth/token"
export const baseUrl:string = "https://api.valeoservice.com"
export const byRef:string ="/api/techassist/v1/technical-documents/byReference"
export const byName:string="/api/techassist/v1/technical-documents/byName"
export const byFamily:string="/api/techassist/v1/technical-documents/byFamily"
export const byLineofBusiness:string="/api/techassist/v1/technical-documents/byLineOfBusiness"
