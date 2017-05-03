import { RouterModule, Routes } from '@angular/router';
import { EventContentComponent } from './event-content.component';

const routes: Routes = [
  { path: '', component: EventContentComponent }
];

export const eventRoutes = RouterModule.forChild(routes);
