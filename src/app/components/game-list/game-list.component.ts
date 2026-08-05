import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndieGamesService } from './../../service/indie-games.service';

type SortField = 'title' | 'author';
type SortDirection = 'asc' | 'desc';
type ViewMode = 'list' | 'grid';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  host: {
    'animate.enter': 'enter-animation',
    'animate.leave': 'leave-animation',
  },
})
export class GameListComponent {
  private gamesService = inject(IndieGamesService);
  readonly games = this.gamesService.games; // Signal (computed)

  readonly sortField = signal<SortField>('title');
  readonly sortDirection = signal<SortDirection>('asc');
  readonly viewMode = signal<ViewMode>('grid');

  readonly sortedGames = computed(() => {
    const dir = this.sortDirection() === 'asc' ? 1 : -1;
    const field = this.sortField();
    return [...this.games()].sort(
      (a, b) =>
        dir * String(a[field] ?? '').localeCompare(String(b[field] ?? '')),
    );
  });

  addSuggestedClick = (): void => {
    this.gamesService.addSuggestedGames();
  };

  onSortFieldChange = (field: SortField): void => {
    this.sortField.set(field);
  };

  onSortDirectionToggle = (): void => {
    this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
  };

  onViewModeChange = (mode: ViewMode): void => {
    this.viewMode.set(mode);
  };
}
