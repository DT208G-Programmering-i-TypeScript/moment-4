import { Routes } from '@angular/router';
import { RamschemaComponent } from './ramschema/ramschema.component';

export const routes: Routes = [
  { path: '', component: RamschemaComponent },
  { path: '**', redirectTo: '' }  // Fallback route
];
