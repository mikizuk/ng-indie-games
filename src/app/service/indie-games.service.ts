import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndieGamesService {
  public games$ = new BehaviorSubject<Game[]>([]);
  public game$ = new BehaviorSubject<Game>(null);
  private gamesSuggested: Game[] = [
    { id: 1, title: 'Disco Elysium', previewImageUrl: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fdisco-elysium%2Fhome%2FEGS_DiscoElysium_ZAUM_S2-1200x1600-6280f1147761adcaefd5bae77dc686b6d21c39e0.jpg', itemUrl: 'https://store.steampowered.com/app/632470/Disco_Elysium/', author: 'ZA/UM', email: 'email@placeholder.com' },
    { id: 2, title: 'Untitled Goose Game', previewImageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202009/0405/GO4TUY9mA2UNJ54R0NPEEEBf.png', itemUrl: 'https://goose.game/', author: 'House House', email: 'email@placeholder.com' },
    { id: 3, title: 'The Witness', previewImageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/210970/capsule_616x353.jpg?t=1598383120', itemUrl: 'https://store.steampowered.com/app/210970/The_Witness/', author: 'Thekla', email: 'email@placeholder.com' },
    { id: 4, title: 'Inside', previewImageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/INSIDE_Xbox_One_cover_art.png/220px-INSIDE_Xbox_One_cover_art.png', itemUrl: 'https://store.steampowered.com/app/304430/INSIDE/', author: 'Playdead', email: 'email@placeholder.com' },
    { id: 5, title: 'Into The Beach', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/590380/ss_4ba0a0a7ff01b0d2d1d840fcb8b0b570a7ed69f7.1920x1080.jpg?t=1589331288', itemUrl: 'https://store.steampowered.com/app/590380/Into_the_Breach/', author: 'Subset Games', email: 'email@placeholder.com' },
    { id: 6, title: 'Hotline Miami', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/219150/ss_263387d83df0626c58a484baa8f78f9394074b76.1920x1080.jpg?t=1603501662', itemUrl: 'https://store.steampowered.com/agecheck/app/219150/', author: 'Dennaton Games', email: 'email@placeholder.com' },
    { id: 7, title: 'Stardew Valley', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324', itemUrl: 'https://store.steampowered.com/app/413150/Stardew_Valley/', author: 'ConcernedApe', email: 'email@placeholder.com' },
    { id: 8, title: 'Gone Home', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/232430/capsule_616x353.jpg?t=1589995154', itemUrl: 'https://store.steampowered.com/app/232430/Gone_Home/', author: 'Fullbright', email: 'email@placeholder.com' },
    { id: 9, title: 'Valheim', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/capsule_616x353.jpg?t=1614337517', itemUrl: 'https://store.steampowered.com/app/892970/Valheim/', author: 'Iron Gate AB', email: 'email@placeholder.com' },
    { id: 10, title: 'Don\'t Starve', previewImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg?t=1602117150', itemUrl: 'https://store.steampowered.com/app/219740/Dont_Starve/', author: 'Klei Entertainment', email: 'email@placeholder.com' },
    { id: 11, title: 'Bastion', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/107100/ss_490170c42afe389fb80324b5c29f9b704d87943e.1920x1080.jpg?t=1601950406', itemUrl: 'https://store.steampowered.com/app/107100/Bastion/', author: 'Supergiant Games', email: 'email@placeholder.com' },
    { id: 12, title: 'FEZ', previewImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Fez_%28video_game%29_cover_art.png', itemUrl: 'https://fez.fandom.com/wiki/FEZ_Wiki', author: 'Polytron Corp', email: 'email@placeholder.com' },
    { id: 13, title: 'Spelunky', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/239350/capsule_616x353.jpg?t=1569449064', itemUrl: 'https://store.steampowered.com/app/239350/Spelunky/', author: 'Mossmouth', email: 'email@placeholder.com' },
    { id: 14, title: 'Dead Cells', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg?t=1613038574', itemUrl: 'https://store.steampowered.com/app/588650/Dead_Cells/', author: 'Motion Twin', email: 'email@placeholder.com' },
    { id: 15, title: 'Limbo', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/48000/ss_a62bc173abb93fbc12dbb6b8d366524a43c1356f.1920x1080.jpg?t=1587371146', itemUrl: 'https://store.steampowered.com/app/48000/LIMBO/', author: 'Playdead', email: 'email@placeholder.com' },
    { id: 16, title: 'Braid', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/26800/0000007901.1920x1080.jpg?t=1515716884', itemUrl: 'https://store.steampowered.com/app/26800/Braid/', author: 'Number None', email: 'email@placeholder.com' },
    { id: 17, title: 'Super Meat Boy', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/40800/header.jpg?t=1579204284', itemUrl: 'https://store.steampowered.com/app/40800/Super_Meat_Boy/', author: 'Team Meat', email: 'email@placeholder.com' },
    { id: 18, title: 'Dear Esther', previewImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/203810/capsule_616x353.jpg?t=1523040923', itemUrl: 'https://store.steampowered.com/app/203810/Dear_Esther/', author: 'The Chinese Room', email: 'email@placeholder.com' },
  ];

  constructor() {
    this.games$.next(this.gamesSuggested);
  }

  public readGame = (id: number): void => this.game$.next(this.games$.getValue().find(game => game.id === id))

}
