import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndieGamesService } from './../../service/indie-games.service';
import { EventType, Game, GameEvent } from '../../types/indie-games';

@Component({
  selector: 'app-game-item',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss'],
})
export class GameItemComponent implements OnInit {
  game!: Game;
  eventType: EventType = EventType.Update;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gamesService: IndieGamesService,
  ) {}

  ngOnInit(): void {
    const gameId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.gamesService.readGame(gameId);

    this.gamesService.game$.subscribe({
      next: (game: Game | null) => {
        game ? (this.game = game) : this.router.navigate(['/game-list']);
      },
      error: (err) => console.log(err),
    });
  }

  onSubmitClick = (game: GameEvent): void => {
    this.gamesService.updateGame(game);
    this.router.navigate(['/games-list']);
  };

  onDeleteClick = (gameId: number | undefined): void => {
    if (gameId && confirm(`Do you want to delete ${this.game?.title}?`)) {
      this.gamesService.deleteGame(gameId);
      this.router.navigate(['/games-list']);
    }
  };
}
