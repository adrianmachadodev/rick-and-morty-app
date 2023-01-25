import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Characters } from 'src/app/core/characters.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchCharacter(value = '', page = 1) {
    return this.http.get<Characters[]>(
      `${environment.baseApiUrl}/?name=${value}&page=${page}`
    );
  }
}
