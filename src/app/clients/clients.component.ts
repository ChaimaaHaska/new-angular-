import { Component, OnInit } from '@angular/core';
import { AnalysesServiceService } from '../analyses-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private analyseService:AnalysesServiceService , private router:Router) { }

  clients;
  currentClient;
  ngOnInit() {
    this.analyseService.getAllClients().subscribe(data=>{
      this.clients=data;
    } , err=>console.log(err))
  }

  onGetAnalyses(client){
    this.currentClient=client;
    let url =client._links.analyses.href
    this.router.navigateByUrl("/analyses/"+btoa(url));
  }
}
