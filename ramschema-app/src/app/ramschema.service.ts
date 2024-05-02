import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kurs } from './kurs';


@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  private dataUrl = 'https://webbutveckling.miun.se/files/ramschema_ht23.json'; // Anpassa sökvägen till din JSON-fil

  constructor(private http: HttpClient) { }

  getRamschema(): Observable<Kurs[]> {
    return this.http.get<Kurs[]>(this.dataUrl);
  }
}