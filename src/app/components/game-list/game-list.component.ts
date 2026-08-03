import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IndieGamesService } from './../../service/indie-games.service';
import { Game } from '../../types/indie-games';

type SortField = 'title' | 'author';
type SortDirection = 'asc' | 'desc';
type ViewMode = 'list' | 'grid';

@Component({
  selector: 'app-game-list',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  sortedGames: Game[] = [];
  sortField: SortField = 'title';
  sortDirection: SortDirection = 'asc';
  viewMode: ViewMode = 'grid';

  constructor(private gamesService: IndieGamesService) {}

  ngOnInit(): void {
    this.gamesService.games$.subscribe({
      next: (games: Game[]) => {
        this.games = games;
        this.applySort();
      },
      error: (err) => console.log(err),
    });
  }

  addSuggestedClick = (): void => {
    this.gamesService.addSuggestedGames();
  };

  onSortFieldChange = (field: SortField): void => {
    this.sortField = field;
    this.applySort();
  };

  onSortDirectionToggle = (): void => {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.applySort();
  };

  onViewModeChange = (mode: ViewMode): void => {
    this.viewMode = mode;
  };

  private applySort = (): void => {
    const dir = this.sortDirection === 'asc' ? 1 : -1;
    this.sortedGames = [...this.games].sort((a, b) => {
      const av = (a[this.sortField] || '').toLowerCase();
      const bv = (b[this.sortField] || '').toLowerCase();
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  };
}
