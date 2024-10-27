import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RamschemaComponent } from './ramschema/ramschema.component';
import { FormsModule } from '@angular/forms'; // Importera FormsModule
import { CommonModule } from '@angular/common'; // Importera CommonModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RamschemaComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'ramschema-app';
}
export class AppModule { }

