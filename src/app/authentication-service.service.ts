import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  host2:string="http://localhost:8080"
  jwt:string;
  userName:string;
  roles:Array<string>;
  constructor(private http:HttpClient) {

  }
  login(data){
    //observe pour recuperer toute la reponse http (et non convertir le res en json  ) afin de recuperer l'entete authorization
    return this.http.post(this.host2+"/login",data,{observe:'response'})
  }

  saveToken(jwt){
    //enregister le token dans le local storage 
    localStorage.setItem('token',jwt);
    //enregistre dans l'application mm
    this.jwt=jwt;
    this.parseJWT();
  }

  parseJWT(){

    let jwtHelper= new JwtHelperService();
    //le token devient un objet js
    let objJwt=jwtHelper.decodeToken(this.jwt)
    this.userName=objJwt.obj;
    this.roles=objJwt.roles;

  }

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }

  isUser(){
    return this.roles.indexOf('USER')>=0;
  }

  isAnalyseManager(){
    return this.roles.indexOf('ANALYSE_MANAGER')>=0;

  }

  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser()|| this.isAnalyseManager())
  }

  //cette methode pour ne pas etre besoin d'authentifier a chaque ms utiliser seulement le token 
  loadToken(){
    //charger le token de local storage
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  //on supprime le token et on renitialise tous les donné de l'util
  logOut(){
    localStorage.removeItem('token');
    this.initCredentials();
   
  }

  initCredentials(){
    this.jwt=undefined;
    this.userName=undefined;
    this.roles=undefined;
  }

}

 