import { Component, OnInit } from '@angular/core';
import { AnalysesServiceService } from '../analyses-service.service';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  clients;
  mode='list';
  constructor(private analyseService:AnalysesServiceService ) { }

  ngOnInit() {
     this.onGetAllClients();
  }

  onGetAllClients(){
    this.analyseService.getAllClients().subscribe(data=>{
      this.clients=data;
      console.log(data);
      },err=>console.log(err))
  }

  onDeleteClient(client){
    let c =confirm('Etes vous sur de vouloir supprimer ?')
    if (!c) return ;
    this.analyseService.deleteRessource(client._links.self.href).subscribe(data=>{
      this.onGetAllClients();
    },err=>console.log(err));
  }

  onNewClient(){
    this.mode='new-client'

  }

  onSaveClient(data){
    let url=this.analyseService.host+"/clients";
    this.analyseService.postRessource(url,data).
    subscribe(data=>{
      this.onGetAllClients();
      this.mode='list';
    },err=>console.log(err))
  }

  CurrentClient ;
  onEditClient(client){
     this.analyseService.getRessource(client._links.self.href).
     subscribe(data=>{
       this.CurrentClient=data;
       this.mode='edit-client'
     },err=>console.log(err))

  }

  onUpdateClient(data){
    this.analyseService.putRessource(this.CurrentClient._links.self.href,data).
    subscribe(data=>{
      this.onGetAllClients();
      this.mode='list';
    },err=>console.log(err))
  }
}
