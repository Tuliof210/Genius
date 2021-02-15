import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.scss'],
})
export class InGameComponent implements OnInit {
  countDown;

  currentScore = 0;
  order = [];
  display = 0;

  constructor() {}

  ngOnInit(): void {
    this.start();
  }

  start() {
    setTimeout(() => {
      this.newRound();
    }, 2000);
  }

  newRound() {
    this.order.push(Math.floor(Math.random() * 10));
    this.displayValue(0, this.order.length);
  }

  displayValue(index, max) {
    this.display = this.order[index];
    index++;
    if (index === max) this.simulatePlayer();
    else
      setTimeout(() => {
        this.displayValue(index, max);
      }, 300);
  }

  simulatePlayer() {
    let score = true;
    for (let num of this.order) {
      if (this.play(num)) continue;
      else {
        score = false;
        break;
      }
    }
    if (score) {
      this.currentScore += 1;
      this.newRound();
    } else
      console.log('Finish', this.order, {
        finalScore: this.currentScore,
      });
  }

  play(num) {
    const playerTry = Math.floor(Math.random() * 10);
    console.log({ playerTry });
    return num === playerTry;
  }
}
