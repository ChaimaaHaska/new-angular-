import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from './authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Medical Analysis App';


  constructor(private authenticationService:AuthenticationServiceService ){}

  ngOnInit(){
    //a chaque fois on charge l'app (comp.ts) on recharge le token pour ne pas etre besoin de s'authentifier
    this.authenticationService.loadToken();
    console.log(this.authenticationService.userName);
  }

isAdmin(){
  return this.authenticationService.isAdmin();
}

isUser(){
  return this.authenticationService.isUser();
}

isAnalyseManager(){
  return this.authenticationService.isAnalyseManager();
}

isAuthenticated(){
  return this.authenticationService.isAuthenticated();
}

logOut(){
  this.authenticationService.logOut();
}



}

