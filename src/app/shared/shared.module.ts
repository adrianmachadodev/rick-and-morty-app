import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CardsComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [CardsComponent, HeaderComponent],
})
export class SharedModule {}
