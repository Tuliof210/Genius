import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'key-board',
  templateUrl: './key-board.component.html',
  styleUrls: ['./key-board.component.scss'],
})
export class KeyBoardComponent implements OnInit {
  @Input() canPlay;
  @Output() sendButtonValue: EventEmitter<number> = new EventEmitter();

  readonly BUTTONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit(): void {
    console.log({ canPlay: this.canPlay });
  }

  buttonPress(value) {
    if (this.canPlay) this.sendButtonValue.emit(value);
  }
}
