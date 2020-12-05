import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {UserService} from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsComponent } from './events/events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { SavedEventsComponent } from './saved-events/saved-events.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SeatSelectionComponent,
    LogoutComponent,
    ContactComponent,
    EventsComponent,
    NewEventComponent,
    SavedEventsComponent,
    EventRegistrationComponent,
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
