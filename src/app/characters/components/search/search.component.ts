import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() emitCharacter = new EventEmitter<string>();
  nameCharac: string = '';
  sendName: string = '';

  constructor() {}

  ngOnInit(): void {}

  emitDataCharacter() {
    this.sendName = this.nameCharac;
    this.emitCharacter.emit(this.sendName);
  }
}
