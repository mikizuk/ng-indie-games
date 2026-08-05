import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameAddComponent } from './components/game-add/game-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'game-list', pathMatch: 'full' },
  { path: 'game-list', component: GameListComponent, data: { animation: 'GameList' } },
  { path: 'game-item/:id', component: GameItemComponent, data: { animation: 'GameItem' } },
  { path: 'game-add', component: GameAddComponent, data: { animation: 'GameAdd' } },
  { path: '**', component: GameListComponent, data: { animation: 'GameList' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
