import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacListComponent } from './charac-list.component';

describe('CharacListComponent', () => {
  let component: CharacListComponent;
  let fixture: ComponentFixture<CharacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
