import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters-list',
    loadChildren: () =>
      import('./charac-list/charac-list.module').then(
        (m) => m.CharacListModule
      ),
  },
  {
    path: '**',
    redirectTo: 'characters',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
