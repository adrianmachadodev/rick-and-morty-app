import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() emitCharacter = new EventEmitter<string>();
  nameCharac: string = '';
  sendName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length >= 3) {
      this.emitCharacter.emit(value);
      console.log(value);
    }
  }
}
