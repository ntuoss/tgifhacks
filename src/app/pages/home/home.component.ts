import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { Event } from 'hackoss';

const WORKSHOP_LIVE_QNA: Link = {
	title: 'Workshop Live Q&A',
	url: 'https://links.ntuoss.com/ask',
	qrUrl: 'https://links.ntuoss.com/ask.qr',
};

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
	event: Event;

	links: Link[] = [WORKSHOP_LIVE_QNA, WORKSHOP_FEEDBACK];

	constructor(private eventsService: EventsService) {}

	ngOnInit() {
		this.getLatestEvent().then(event => {
			// this.event = {
			// 	tgif: '98',
			// 	title: 'Data Science 1/3: Getting into Data Science with Pandas',
			// 	startTime: new Date('Friday, August 30 2019 6:30 PM'),
			// 	endTime: new Date('Friday, August 30 2019 8:30 PM'),
			// 	venue: {
			// 		addressLine1: 'Nanyang Technological University',
			// 		addressLine2: 'NS3 NS3-02-09 LT1',
			// 	},
			// };
			this.event = event;
			if (event.githubUrl) {
				console.log(event);
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
