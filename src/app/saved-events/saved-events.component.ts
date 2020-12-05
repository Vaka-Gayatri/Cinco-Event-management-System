import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.css']
})
export class SavedEventsComponent implements OnInit {
  UserConnections: any;
  UserProfile: any;
  feedback: string;
  user: any;


  constructor(private dataService: DataService, private cookie: CookieService, private userService: UserService, private router: Router) { }

  public allowedTier: string[];

  seatSelectionForm = new FormGroup({
    Category: new FormControl(''),
  });

  updateConnectionForm = new FormGroup({
    ConId: new FormControl(''),
  });

  deleteConnectionForm = new FormGroup({
    ConId: new FormControl(''),
  });

  ngOnInit(): void {
    this.allowedTier = ['Platinum', 'Gold', 'Silver'];

    if (this.userService.getUserDetails().length <= 0) {
      this.router.navigate(['/login']);
    }

    if (this.userService.getUserDetails().length > 0) {
      this.UserProfile = JSON.parse(this.userService.getUserDetails()[2]);
      this.UserConnections = this.UserProfile._userConnections;
    }
  }

  onSubmitUpdate(ConId) {
    this.router.navigate(['/event-registration/' + ConId]);
  }

  onSubmitDelete(ConId) {
    this.dataService.deleteRSVP(ConId).subscribe((data: any)  => {
      this.feedback = data.feedback;
      this.UserConnections = data.Profile._userConnections;
      this.userService.storeOnLocalStorage([JSON.stringify(data.User), 'true', JSON.stringify(data.Profile)]);
    });
  }

  onSubmitSeat(registeredEvent) {
    this.dataService.setSeat(this.seatSelectionForm.value.Category, registeredEvent._id).subscribe((data: any) => {
      this.feedback = data.response;
    });
  }

  navigateToAddEvent(){
    this.router.navigate(['/new-event]']);
  }

}
