import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IndieGamesComponent } from './components/indie-games/indie-games.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IndieGamesComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
