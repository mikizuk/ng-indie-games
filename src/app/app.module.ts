import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { AppComponent } from './app.component';
import { IndieGamesComponent } from './components/indie-games/indie-games.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';
// PROVIDERS
import { IndieGamesService } from './service/indie-games.service';
import { GameAddComponent } from './components/game-add/game-add.component';
import { GameFormComponent } from './components/game-form/game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndieGamesComponent,
    GameListComponent,
    GameItemComponent,
    GameAddComponent,
    GameFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IndieGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
