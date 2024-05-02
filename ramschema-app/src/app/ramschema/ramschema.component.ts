import { Component, OnInit, inject  } from '@angular/core';
import { RamschemaService } from '../ramschema.service';
import { Kurs } from '../kurs';
import { FormsModule } from '@angular/forms'; // Importera FormsModule
import { CommonModule } from '@angular/common'; // Importera CommonModule


@Component({
  selector: 'app-ramschema',
  templateUrl: './ramschema.component.html',
  styleUrls: ['./ramschema.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RamschemaComponent implements OnInit {
  kurser: Kurs[] = [];
  filtreradeKurser: Kurs[] = [];
  sokfras: string = '';
  sorteringsKolumn: string = '';
  stigandeOrdning: boolean = true;

  constructor(private ramschemaService: RamschemaService = inject(RamschemaService)) { }

  ngOnInit(): void {
    this.ramschemaService.getRamschema().subscribe(data => {
      this.kurser = data;
      this.filtreradeKurser = data;
    });
  }

  filtreraKurser(): void {
    this.filtreradeKurser = this.kurser.filter(kurs => {
      const sokTerm = this.sokfras.toLowerCase();
      return kurs.code.toLowerCase().includes(sokTerm) || kurs.coursename.toLowerCase().includes(sokTerm);
    });
  }

  sorteraKurser(kolumn: string): void {
    if (this.sorteringsKolumn === kolumn) {
      this.stigandeOrdning = !this.stigandeOrdning;
    } else {
      this.sorteringsKolumn = kolumn;
      this.stigandeOrdning = true;
    }

    this.filtreradeKurser.sort((a, b) => {
      const aVal = a[kolumn].toLowerCase();
      const bVal = b[kolumn].toLowerCase();
      return this.stigandeOrdning ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });
  }
}