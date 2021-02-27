import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndieGamesService } from './../../service/indie-games.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit {
  eventType: EventType = EventType.Add;

  constructor(private router: Router,
    private gamesService: IndieGamesService) { }

  ngOnInit(): void {
  }

  onSubmitClick = (newGame: GameEvent): void => {
    this.gamesService.createGame(newGame);
    this.router.navigate(['/games-list']);
  }
}
