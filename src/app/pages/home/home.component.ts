import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { Event } from 'hackoss';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  event: Event;
  // event: any = {
  //   subTitle: 'TGIFHacks #91',
  //   title: 'Google: Android Basics',
  //   date: 'Friday, 25 January 2019',
  //   time: '6:30 PM - 8:30 PM Singapore Standard Time',
  //   venue: 'NTU LT1 Block NS3 NS3-02-09'
  // };

  links: Link[] = [
    {
      title: 'Workshop Live Q&A',
      url: 'https://links.ntuoss.com/ask',
      qrUrl: 'https://links.ntuoss.com/ask.qr'
    },
    // {
    //   title: 'Workshop Content',
    //   url: 'https://links.ntuoss.com/workshop',
    //   qrUrl: 'https://links.ntuoss.com/workshop.qr'
    // },
    {
      title: 'Workshop Feedback',
      url: 'https://links.ntuoss.com/feedback',
      qrUrl: 'https://links.ntuoss.com/feedback.qr'
    },
  ];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getLatestEvent().then(event => {
      this.event = event;
    });
  }

  async getLatestEvent(): Promise<Event> {
    let events = await this.eventsService.getEvents();
    events = events.filter(event => event.status !== 'draft');
    events = events.sort((event1, event2) => event2.startTime.getTime() - event1.startTime.getTime());
    return events[0];
  }

}

export interface Link {
  title: string;
  url: string;
  qrUrl: string;
}
