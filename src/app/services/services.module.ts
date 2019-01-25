import { NgModule } from '@angular/core';
import { EventsService } from './events/events.service';

const SERVICES = [
    EventsService
];

@NgModule({
    providers: [...SERVICES]
})
export class ServicesModule { }
