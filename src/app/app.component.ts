import { Component, OnInit } from '@angular/core';
import { CharactersService } from './character/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rick-and-morty-app';

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.characterService.getCharacter();
  }
}
