import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// sound
import { SoundService } from '../../../services/sound.service';
@Component({
  selector: 'key-board',
  templateUrl: './key-board.component.html',
  styleUrls: ['./key-board.component.scss'],
})
export class KeyBoardComponent implements OnInit {
  @Input() enabled;
  @Output() pressKey: EventEmitter<number> = new EventEmitter();

  readonly BUTTONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private readonly sound: SoundService) {}

  ngOnInit(): void {}

  buttonPress(value): void {
    if (this.enabled) {
      this.sound.btnSound();
      this.pressKey.emit(value);
    }
  }
}
