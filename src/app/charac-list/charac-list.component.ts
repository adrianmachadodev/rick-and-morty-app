import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, take } from 'rxjs';
import { SearchService } from '../characters/service/search.service';
import { Characters } from '../core/characters.model';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-charac-list',
  templateUrl: './charac-list.component.html',
  styleUrls: ['./charac-list.component.scss'],
})
export class CharacListComponent implements OnInit {
  charactersList: Characters[] = [];
  info: RequestInfo = {
    next: '',
  };

  private pagNum = 1;
  private query: string;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharactersByQuery();
    this.getDataService();
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      console.log(params);
      this.query = params['q'];
      this.getDataService();
    });
  }

  private getDataService(): void {
    this.searchService
      .searchCharacter(this.query, this.pagNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.charactersList = [...this.charactersList, ...results];
          this.info = info;
        } else {
          this.charactersList = [];
        }
      });
  }
}
