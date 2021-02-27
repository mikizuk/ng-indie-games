import { Component, OnDestroy } from '@angular/core';
import { IndieGamesService } from './../../service/indie-games.service';

@Component({
  selector: 'app-indie-games',
  templateUrl: './indie-games.component.html',
  styleUrls: ['./indie-games.component.scss']
})
export class IndieGamesComponent implements OnDestroy {

  constructor(private gamesService: IndieGamesService) { }

  ngOnDestroy(): void {
    this.gamesService.games$.unsubscribe();
  }

}
