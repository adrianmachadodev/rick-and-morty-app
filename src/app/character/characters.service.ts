import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from '../core/characters.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters: Characters[] = [];

  constructor(private http: HttpClient) {}

  getCharacter() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  searchCharacters(query = '') {
    return this.http.get<Characters[]>(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );
  }
}
