import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IndieGamesService } from './../../service/indie-games.service';
import { Game } from '../../types/indie-games';

@Component({
  selector: 'app-game-list',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: IndieGamesService) {}

  ngOnInit(): void {
    this.gamesService.games$.subscribe({
      next: (games: Game[]) => (this.games = games),
      error: (err) => console.log(err),
    });
  }

  addSuggestedClick = (): void => {
    this.gamesService.addSuggestedGames();
  };
}
