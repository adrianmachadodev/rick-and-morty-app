import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../character/characters.service';
import { Characters } from '../core/characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Characters[] = [];
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.characterService.getCharacter().subscribe((data: any) => {
      this.characters = data;
      console.log(this.characters);
    });
  }
}
