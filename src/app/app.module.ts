import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ConnectionComponent } from './connection/connection.component';

import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SavedconnectionsComponent } from './savedconnections/savedconnections.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {UserService} from './services/user.service';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { RegisterComponent } from './register/register.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectionsComponent,
    HomeComponent,
    ConnectionComponent,
    LoginComponent,
    SavedconnectionsComponent,
    NewconnectionComponent,
    RegisterComponent,
    SeatSelectionComponent,
    LogoutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule,
    NgbModule
  ],
  providers: [
    DataService,
    UserService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
