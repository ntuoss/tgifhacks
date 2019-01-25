import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesModule } from '../services/services.module';
import { MomentModule } from 'ngx-moment';

const COMPONENTS = [
  HomeComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MomentModule
  ],
})
export class PagesModule { }
