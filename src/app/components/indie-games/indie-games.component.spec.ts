import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieGamesComponent } from './indie-games.component';

describe('IndieGamesComponent', () => {
  let component: IndieGamesComponent;
  let fixture: ComponentFixture<IndieGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndieGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndieGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
