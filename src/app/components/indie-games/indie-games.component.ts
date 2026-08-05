import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndieGamesService } from './../../service/indie-games.service';

@Component({
  selector: 'app-indie-games',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './indie-games.component.html',
  styleUrls: ['./indie-games.component.scss'],
})
export class IndieGamesComponent {
  private gamesService = inject(IndieGamesService);
}
