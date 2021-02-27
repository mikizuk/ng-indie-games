import { TestBed } from '@angular/core/testing';

import { IndieGamesService } from './indie-games.service';

describe('IndieGamesService', () => {
  let service: IndieGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndieGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
