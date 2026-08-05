import { Injectable, signal, computed } from '@angular/core';
import Utils from './../utils/indie-games.utils';
import { Game, GameEvent } from '../types/indie-games';
import { GAMES_SUGGESTED } from '../data/games-suggested';

@Injectable({
  providedIn: 'root',
})
export class IndieGamesService {
  private _games = signal<Game[]>([]);
  private _game = signal<Game | undefined>(undefined);

  public games = computed(() => this._games());
  public game = computed(() => this._game());

  public gamesSorted = computed(() => {
    return [...this._games()].sort((a, b) => a.title.localeCompare(b.title));
  });

  constructor() {
    if (sessionStorage.getItem('indie-games')?.length) {
      this.getGamesFromLocalStorage();
    }
  }

  public createGame = (newGame: Game): void => {
    newGame.id = this.getUniqueId() as number;
    this._games.set([...this._games(), newGame]);
    this.updateLocalStorage();
  };

  public readGame = (id: string | number): void => {
    const numericId = typeof id === 'string' ? +id : id;
    this._game.set(
      this._games().find((game) => game.id === numericId) ?? undefined,
    );
  };

  public updateGame = (gameUpdated: GameEvent): void => {
    this._games.set(
      this._games().map((item) =>
        item.id === gameUpdated.id ? gameUpdated : item,
      ),
    );
    this.updateLocalStorage();
  };

  public deleteGame = (id: string | number): void => {
    const numericId = typeof id === 'string' ? +id : id;
    this._games.set(this._games().filter((game) => game.id !== numericId));
    this.updateLocalStorage();
  };

  public addSuggestedGames = (): void => {
    this._games.set(GAMES_SUGGESTED);
    this.updateLocalStorage();
  };

  private getUniqueId = (): number => {
    const actualGamesIds: number[] = this._games().map((game) => game.id);
    const randomId = Utils.getRandomId();

    if (actualGamesIds.includes(randomId)) {
      return this.getUniqueId();
    } else {
      return randomId;
    }
  };

  private getGamesFromLocalStorage = (): void => {
    this._games.set(
      JSON.parse(sessionStorage?.getItem('indie-games') as string),
    );
  };

  private updateLocalStorage = (): void => {
    sessionStorage.setItem('indie-games', JSON.stringify(this._games()));
  };
}
