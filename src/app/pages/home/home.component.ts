import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { Event } from 'hackoss';

const WORKSHOP_LIVE_QNA: Link = {
  title: 'Workshop Live Q&A',
  url: 'https://links.ntuoss.com/ask',
  qrUrl: 'https://links.ntuoss.com/ask.qr'
};

const WORKSHOP_CONTENT: Link = {
  title: 'Workshop Content',
  url: 'https://links.ntuoss.com/workshop',
  qrUrl: 'https://links.ntuoss.com/workshop.qr'
};

const WORKSHOP_FEEDBACK: Link = {
  title: 'Workshop Feedback',
  url: 'https://links.ntuoss.com/feedback',
  qrUrl: 'https://links.ntuoss.com/feedback.qr'
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  event: Event;

  links: Link[] = [
    WORKSHOP_LIVE_QNA,
    WORKSHOP_FEEDBACK
  ];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getLatestEvent().then(event => {
      this.event = event;

      if (event.githubUrl) {
        this.links.splice(1, 0, WORKSHOP_CONTENT);
      }
    });
  }

  async getLatestEvent(): Promise<Event> {
    const events = await this.eventsService.getEvents([{
      fieldPath: 'status',
      opStr: '==',
      value: 'live'
    }], 1);
    return events[0];
  }

}

export interface Link {
  title: string;
  url: string;
  qrUrl: string;
}
