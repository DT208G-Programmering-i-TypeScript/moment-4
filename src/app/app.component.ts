import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RamschemaComponent } from './ramschema/ramschema.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RamschemaComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'moment-4';
}

