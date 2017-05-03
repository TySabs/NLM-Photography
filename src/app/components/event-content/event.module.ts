import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventContentComponent } from './event-content.component';

import { eventRoutes } from './event.routes';

@NgModule({
  imports: [
    CommonModule,
    eventRoutes
  ],
  declarations: [
    EventContentComponent
  ]
})
export class EventModule { }
