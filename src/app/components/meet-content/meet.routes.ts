import { RouterModule, Routes } from '@angular/router';
import { MeetContentComponent } from './meet-content.component';

const routes: Routes = [
  { path: '', component: MeetContentComponent }
];

export const meetRoutes = RouterModule.forChild(routes);
