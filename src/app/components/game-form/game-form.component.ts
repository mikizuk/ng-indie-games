import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  computed,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EventType, Game, GameEvent } from '../../types/indie-games';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent {
  readonly eventType = input<EventType>(EventType.Add);
  readonly game = input<Game | undefined>();
  readonly formSubmit = output<GameEvent>();

  readonly buttonCaption = computed(() =>
    this.eventType() === EventType.Add ? 'Add game' : 'Save',
  );

  private formBuilder = inject(FormBuilder);

  formGroup: FormGroup = this.formBuilder.group({
    title: [null, [Validators.minLength(3)]],
    id: [null],
    previewImageUrl: [null],
    itemUrl: [null],
    author: [null],
    email: [null, [Validators.required, Validators.email]],
  });

  constructor() {
    effect(() => {
      const g = this.game();
      if (g) {
        this.handleFormData();
      } else if (this.eventType() === EventType.Add) {
        this.formGroup.reset();
      }
    });
  }

  submitClick = (): void => {
    const gameEvent: GameEvent = {
      eventType: this.eventType(),
      id: this.formGroup.get('id')?.value,
      title: this.formGroup.get('title')?.value,
      previewImageUrl: this.formGroup.get('previewImageUrl')?.value,
      itemUrl: this.formGroup.get('itemUrl')?.value,
      author: this.formGroup.get('author')?.value,
      email: this.formGroup.get('email')?.value,
    };
    this.formSubmit.emit(gameEvent);
  };

  private handleFormData = (): void => {
    const g = this.game();
    if (!g) {
      return;
    }

    this.formGroup.patchValue({
      title: g.title ?? null,
      id: g.id ?? null,
      previewImageUrl: g.previewImageUrl ?? null,
      itemUrl: g.itemUrl ?? null,
      author: g.author ?? null,
      email: g.email ?? null,
    });
  };
}
