import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../character/characters.service';
import { Characters } from '../core/characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Array<Characters> = [];
  constructor(private characterService: CharactersService) {}

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
