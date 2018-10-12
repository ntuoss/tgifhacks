import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  event: Event = {
    subTitle: 'TGIFHacks #87',
    title: 'Unity Game Development: Rebuilding Super Mario Bros',
    date: 'Friday, 12 October 2018',
    time: '6:30 PM - 8:30 PM Singapore Standard Time',
    venue: 'NTU LT1 Block NS3 NS3-02-09'
  };

  links: Link[] = [
    {
      title: 'Workshop Live Q&A',
      url: 'https://links.ntuoss.com/ask',
      qrUrl: 'https://links.ntuoss.com/ask.qr'
    },
    {
      title: 'Workshop Content',
      url: 'https://links.ntuoss.com/workshop',
      qrUrl: 'https://links.ntuoss.com/workshop.qr'
    },
    {
      title: 'Workshop Feedback',
      url: 'https://links.ntuoss.com/feedback',
      qrUrl: 'https://links.ntuoss.com/feedback.qr'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Event {
  subTitle: string;
  title: string;
  date: string;
  time: string;
  venue: string;
}

export interface Link {
  title: string;
  url: string;
  qrUrl: string;
}
