import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameAddComponent } from './components/game-add/game-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'indie-games', pathMatch: 'full' },
  { path: 'game-list', component: GameListComponent },
  { path: 'game-item/:id', component: GameItemComponent },
  { path: 'game-add', component: GameAddComponent },
  { path: '**', component: GameListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
