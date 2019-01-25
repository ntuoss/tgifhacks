import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  EventsRepository,
  FirebaseRepository,
  PeopleRepository,
  LocationsRepository,
  OrganisationsRepository,
  ArtworksRepository
} from 'hackoss';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends EventsRepository {

  constructor() {
    const fr = new FirebaseRepository(environment.firebase);
    const pr = new PeopleRepository(fr);
    const lr = new LocationsRepository(fr);
    const or = new OrganisationsRepository(fr);
    const ar = new ArtworksRepository(fr, pr);
    super(fr, pr, lr, or, ar);
  }
}
