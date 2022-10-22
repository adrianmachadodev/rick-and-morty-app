import { Component, Input, OnInit } from '@angular/core';
import { Characters } from 'src/app/core/characters.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() data: Array<Characters> = [];

  constructor() {}

  ngOnInit(): void {}
}
