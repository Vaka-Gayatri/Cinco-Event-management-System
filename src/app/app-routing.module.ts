import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { LogoutComponent } from './logout/logout.component';
import {ContactComponent} from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { SavedEventsComponent } from './saved-events/saved-events.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event-registration/:id', component: EventRegistrationComponent },
  { path: 'saved-events', component: SavedEventsComponent},
  { path: 'new-event', component: NewEventComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'seat-selection', component: SeatSelectionComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
