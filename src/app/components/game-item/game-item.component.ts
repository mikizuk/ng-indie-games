import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndieGamesService } from './../../service/indie-games.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  game: Game;
  eventType: EventType = EventType.Update;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private gamesService: IndieGamesService) { }

  ngOnInit(): void {
    const gameId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.gamesService.readGame(gameId);

    this.gamesService.game$
      .subscribe({
        next: (game: Game) => this.game = game,
        error: err => console.log(err)
      })
  }

  onSubmitClick = (game: GameEvent): void => {
    this.gamesService.updateGame(game);
    this.router.navigate(['/indie-games-list']);
  }

  onDeleteClick = (gameId: number | undefined): void => {
    if (gameId && confirm(`Do you want to delete ${this.game?.title}?`)) {
      this.gamesService.deleteGame(gameId);
      this.router.navigate(['/indie-games-list']);
    }
  }

}
