import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AnalysesServiceService {

  public host:string="http://localhost:8088";
  constructor(private http : HttpClient, private authService : AuthenticationServiceService) { }


getAllClients(){
  return this.http.get(this.host+"/clients");
}

getRessource(url){
  return this.http.get(url);
}

deleteRessource(url){
  //creer un headers qui contient l'element authorization contenant notre token jwt
  let headers=new HttpHeaders({'authorization':this.authService.jwt});
  //quand on envoie la requette delete on envoie aussi le header contenant le token 
  return this.http.delete(url,{headers:headers});
}

postRessource(url , data){
  let headers=new HttpHeaders({'authorization':this.authService.jwt});
  return this.http.post(url , data , {headers:headers} )
}

putRessource(url,data){
  let headers=new HttpHeaders({'authorization':this.authService.jwt});
  return this.http.put(url,data,{headers:headers});
}

//patch a jour tout les attribut alors que put seulemet l'attribut que on a modifié
patchRessource(url,data){
  let headers=new HttpHeaders({'authorization':this.authService.jwt});
  return this.http.patch(url,data,{headers:headers});
}



}
