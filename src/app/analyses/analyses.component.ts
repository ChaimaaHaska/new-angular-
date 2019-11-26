import { Component, OnInit } from '@angular/core';
import { AnalysesServiceService } from '../analyses-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {

  constructor(private analyseService:AnalysesServiceService , private route:ActivatedRoute , private router :Router) { 
    
    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd ){
        let url=atob(route.snapshot.params.urlProd); //decoder base 64 url a l'aide atob
        this.getAnalyses(url);
      }
    })
    
  }

  ngOnInit() {
  }

  analyses ;
  getAnalyses(url){
    console.log(url)
    this.analyseService.getRessource(url).subscribe(data=>{
      this.analyses=data
      console.log(data)
    } , err=>console.log(err))
  }

}
