import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacListComponent } from './charac-list.component';

const routes: Routes = [{ path: '', component: CharacListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacListRoutingModule {}
