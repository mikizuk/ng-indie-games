import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndieGamesService {
  public games$ = new BehaviorSubject<Game[]>([]);
  private gamesSuggested: Game[] = [
    { id: 1, title: 'Disco Elysium', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 2, title: 'Untitled Goose Game', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 3, title: 'The Witness', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 4, title: 'Inside', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 5, title: 'Into The Beach', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 6, title: 'Hotline Miami', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 7, title: 'Stardew Valley', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 8, title: 'Gone Home', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 9, title: 'Valheim', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 10, title: 'Don\'t Starve', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 11, title: 'Bastion', previewImageUrl: '', itemUrl: '', author: 'Supergiant Gamesauthor unknown', email: 'email@placeholder.com' },
    { id: 12, title: 'FEZ', previewImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Fez_%28video_game%29_cover_art.png', itemUrl: 'https://fez.fandom.com/wiki/FEZ_Wiki', author: 'Polytron Corpauthor unknown', email: 'email@placeholder.com' },
    { id: 13, title: 'Spelunky', previewImageUrl: '', itemUrl: '', author: 'Mossmouthauthor unknown', email: 'email@placeholder.com' },
    { id: 14, title: 'Dead Cells', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 15, title: 'Limbo', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 16, title: 'Braid', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 17, title: 'Super Meat Boy', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
    { id: 18, title: 'Dear Esther', previewImageUrl: '', itemUrl: '', author: 'author unknown', email: 'email@placeholder.com' },
  ];

  constructor() {
    this.games$.next(this.gamesSuggested);
    console.log('games$', this.games$.getValue());
  }
}
