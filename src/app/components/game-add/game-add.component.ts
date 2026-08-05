import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndieGamesService } from './../../service/indie-games.service';
import { EventType, GameEvent } from '../../types/indie-games';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-game-add',
  standalone: true,
  imports: [CommonModule, RouterModule, GameFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss'],
  host: {
    'animate.enter': 'enter-animation',
    'animate.leave': 'leave-animation'
  }
})
export class GameAddComponent {
  eventType: EventType = EventType.Add;

  private router = inject(Router);
  private gamesService = inject(IndieGamesService);

  onSubmitClick = (newGame: GameEvent): void => {
    this.gamesService.createGame(newGame);
    this.router.navigate(['/game-list']);
  };
}
