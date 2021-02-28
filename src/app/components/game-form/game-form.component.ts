import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  @Input() eventType: EventType = EventType.Add;
  @Input() game: Game;
  @Output() formSubmit = new EventEmitter<GameEvent>();
  buttonCaption: string = '';
  formGroup: FormGroup = this.formBuilder.group({
    title: [null, [Validators.minLength(3)]],
    id: [null],
    previewImageUrl: [null],
    itemUrl: [null],
    author: [null],
    email: [null, [Validators.required, Validators.email]],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.handleButtonType();
    this.handleFormData();
  }

  submitClick = (): void => {
    const gameEvent: GameEvent = {
      eventType: this.eventType,
      id: this.formGroup.get('id')?.value,
      title: this.formGroup.get('title')?.value,
      previewImageUrl: this.formGroup.get('previewImageUrl')?.value,
      itemUrl: this.formGroup.get('itemUrl')?.value,
      author: this.formGroup.get('author')?.value,
      email: this.formGroup.get('email')?.value
    };
    this.formSubmit.emit(gameEvent);
  }

  private handleButtonType = (): void => {
    if (this.eventType === EventType.Add) {
      this.buttonCaption = 'Add game';
    } else if (this.eventType === EventType.Update) {
      this.buttonCaption = 'Save';
    }
  }

  private handleFormData = (): void => {
    this.formGroup.patchValue({
      title: this.game?.title,
      id: this.game?.id,
      previewImageUrl: this.game?.previewImageUrl,
      itemUrl: this.game?.itemUrl,
      author: this.game?.author,
      email: this.game?.email,
    });
  }

}
