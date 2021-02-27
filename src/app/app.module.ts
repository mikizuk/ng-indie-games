import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { IndieGamesComponent } from './components/indie-games/indie-games.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';

// PROVIDERS
import { IndieGamesService } from './service/indie-games.service';

const COMPONENTS = [
  AppComponent,
  IndieGamesComponent,
  GameListComponent
];

const IMPORTS = [
  BrowserModule,
  AppRoutingModule,
]

const PROVIDERS = [
  IndieGamesService,
]

@NgModule({
  declarations: [...COMPONENTS, GameItemComponent, GameListComponent],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
