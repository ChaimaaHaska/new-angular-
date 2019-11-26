import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AnalysesComponent } from './analyses/analyses.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule}  from '@angular/forms'
import { from } from 'rxjs';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminAnalysesComponent } from './admin-analyses/admin-analyses.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AnalysesComponent,
    LoginComponent,
    AdminClientsComponent,
    AdminAnalysesComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
