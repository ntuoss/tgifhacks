import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { Event } from 'hackoss';

// const WORKSHOP_LIVE_QNA: Link = {
//   title: 'Workshop Live Q&A',
//   url: 'https://links.ntuoss.com/ask',
//   qrUrl: 'https://links.ntuoss.com/ask.qr'
// };

const WORKSHOP_CONTENT: Link = {
	title: 'Workshop Material',
	url: 'https://links.ntuoss.com/workshop',
	qrUrl: 'https://links.ntuoss.com/workshop.qr',
};

const WORKSHOP_FEEDBACK: Link = {
	title: 'Workshop Feedback',
	url: 'https://links.ntuoss.com/feedback',
	qrUrl: 'https://links.ntuoss.com/feedback.qr',
};

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	// event: Event;
	event: any;

	links: Link[] = [
		// WORKSHOP_LIVE_QNA,
		WORKSHOP_FEEDBACK,
	];

	constructor(private eventsService: EventsService) {}

	ngOnInit() {
		this.getLatestEvent().then(event => {
			//

			// Friday, August 30 2019
			// 6:30 PM - 8:30 PM Singapore Standard Time
			// Nanyang Technological University Block NS3 NS3-02-09 LT1
			//   <h1 class="subTitle">TGIFHacks #{{event.tgif}}</h1>
			// <h1 class="title">{{event.title}}</h1>
			// <br>
			// <h1 class="info">{{event.startTime | amDateFormat : 'dddd, MMMM D YYYY'}}</h1>
			// <h1 class="info">{{event.startTime | amDateFormat : 'h:m A'}} - {{event.endTime | amDateFormat : 'h:m A'}} Singapore Standard Time</h1>
			// <h1 class="info">{{event.venue.addressLine1}} {{event.venue.addressLine2}}</h1>
			this.event = {
				tgif: '98',
				title: 'Data Science 1/3: Getting into Data Science with Pandas',
				startTime: new Date('Friday, August 30 2019 6:30 PM'),
				endTime: new Date('Friday, August 30 2019 8:30 PM'),
				venue: {
					addressLine1: 'Nanyang Technological University',
					addressLine2: 'NS3 NS3-02-09 LT1',
				},
			};
			if (event.githubUrl) {
				this.links.splice(1, 0, WORKSHOP_CONTENT);
			}
		});
	}

	async getLatestEvent(): Promise<Event> {
		const events = await this.eventsService.getEvents(
			[
				{
					fieldPath: 'status',
					opStr: '==',
					value: 'live',
				},
			],
			1,
		);
		return events[0];
	}
}

export interface Link {
	title: string;
	url: string;
	qrUrl: string;
}
