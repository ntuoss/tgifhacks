import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Link[] = [
    {
      title: 'Workshop Live Q&A',
      url: 'https://links.ntuoss.com/ask',
      qrUrl: 'https://links.ntuoss.com/ask.qr'
    },
    {
      title: 'Workshop Feedback',
      url: 'https://links.ntuoss.com/feedback',
      qrUrl: 'https://links.ntuoss.com/feedback.qr'
    },
    {
      title: 'Workshop Content',
      url: 'https://links.ntuoss.com/workshop',
      qrUrl: 'https://links.ntuoss.com/workshop.qr'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Link {
  title: string;
  url: string;
  qrUrl: string;
}
