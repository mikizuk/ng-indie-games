import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTS
import { AppComponent } from './app.component';
import { IndieGamesComponent } from './components/indie-games/indie-games.component';
import { GameListComponent } from './components/game-list/game-list.component';

// PROVIDERS
import { IndieGamesService } from './service/indie-games.service';

const COMPONENTS = [
  AppComponent,
  IndieGamesComponent,
  GameListComponent
];

const IMPORTS = [
  BrowserModule,
]

const PROVIDERS = [
  IndieGamesService,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
