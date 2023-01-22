import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchCharacter$(value: string): Observable<any> {
    console.log('estoy en el servicio -->', value);

    return this.http
      .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .pipe(map((dataRaw: any) => dataRaw.data));
  }
}
