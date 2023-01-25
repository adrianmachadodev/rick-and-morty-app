import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subscription } from 'rxjs';
import { CharactersService } from '../character/characters.service';
import { Characters } from '../core/characters.model';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Array<Characters> = [];
  FilterCharac: Observable<any> = of([]);
  constructor(
    private characterService: CharactersService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getServiceCharacters();
  }

  getServiceCharacters() {
    this.characterService.getCharacter().subscribe((data: any) => {
      this.characters = data.results;
      console.log(this.characters);
    });
  }
}
