import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationServiceService, private router:Router) { }

  ngOnInit() {
  }
  onLogin(data){
    this.authenticationService.login(data).subscribe(resp=>{
      let jwt=resp.headers.get('Authorization');
      this.authenticationService.saveToken(jwt);
      //apres l'authen la formule de log ne s'affiche plus donc on navigue au route par defaut
      this.router.navigateByUrl("/");


    },err=>console.log(err))
  }

  isAdmin(){
    return this.authenticationService.isAdmin();
  }

  isUser(){
    return this.authenticationService.isUser();
  }

  isAnalyseManager() {
    return this.authenticationService.isAnalyseManager();
  }

}
