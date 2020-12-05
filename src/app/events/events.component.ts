import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  allConnections: any;
  currentDate: string;



  constructor(private dataService: DataService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.dataService.getConnections().subscribe(data => {
      this.allConnections = JSON.parse(JSON.stringify(data));
      console.log(this.allConnections);
    });

    this.dateConversion();
  }

  dateConversion(){
    this.currentDate = this.datepipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    console.log(this.currentDate);
  }

}
