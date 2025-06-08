import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Kurs {
  code: string;
  coursename: string;
  progression: string;
  syllabus: string;
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  private dataUrl = 'https://webbutveckling.miun.se/files/ramschema_ht23.json';

  constructor(private http: HttpClient = inject(HttpClient)) { }

  getRamschema(): Observable<Kurs[]> {
    return this.http.get<Kurs[]>(this.dataUrl);
  }
}