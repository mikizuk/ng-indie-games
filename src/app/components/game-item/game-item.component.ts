import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  effect,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndieGamesService } from './../../service/indie-games.service';
import { EventType, GameEvent } from '../../types/indie-games';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-game-item',
  standalone: true,
  imports: [CommonModule, RouterModule, GameFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss'],
  host: {
    'animate.enter': 'enter-animation',
    'animate.leave': 'leave-animation'
  }
})
export class GameItemComponent {
  private gamesService = inject(IndieGamesService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  get game() {
    return this.gamesService.game;
  }

  readonly eventType = input<EventType>(EventType.Update);

  constructor() {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (!gameId) {
      this.router.navigate(['/game-list']);
      return;
    }

    // load selected game into service signal
    this.gamesService.readGame(gameId);
  }

  // expose a plain value for templates to avoid passing InputSignal objects
  get eventTypeValue(): EventType {
    return this.eventType();
  }

  onSubmitClick = (gameEvent: GameEvent): void => {
    this.gamesService.updateGame(gameEvent);
    this.router.navigate(['/game-list']);
  };

  onDeleteClick = (gameId: string | number | undefined): void => {
    const id = gameId ?? this.game()?.id;
    if (id && confirm(`Do you want to delete ${this.game()?.title}?`)) {
      this.gamesService.deleteGame(id);
      this.router.navigate(['/game-list']);
    }
  };
}
