import { Component, OnInit } from '@angular/core';
import { IndieGamesService } from './../../service/indie-games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: IndieGamesService) { }

  ngOnInit(): void {
    this.gamesService.games$
      .subscribe({
        next: (games: Game[]) => this.games = games,
        error: err => console.log(err)
      })
  }
}
