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

  emitDataCharacter() {
    this.sendName = this.nameCharac;
    this.emitCharacter.emit(this.sendName);
  }

  onSearch(value: string) {
    console.log(value);

    if (value && value.length > 3) {
      this.router.navigate(['/characters'], { queryParams: { q: value } });
    }
  }
}
