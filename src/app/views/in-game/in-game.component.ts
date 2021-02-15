import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.scss'],
})
export class InGameComponent implements OnInit {
  canPlay = false;
  countDown;

  showDisplay;
  display;
  order = [];

  currentScore = 0;
  playsToScore;
  playerTry;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.showDisplay = false;
    this.start();
  }

  start() {
    setTimeout(() => {
      this.newRound();
    }, 2000);
  }

  newRound() {
    this.canPlay = false;
    this.playerTry = 0;
    this.order.push(Math.floor(Math.random() * 10) || 1);
    this.displayValue(0, this.order.length);
  }

  displayValue(index, max) {
    this.display = this.order[index];
    if (!this.showDisplay) this.showDisplay = true;

    index++;
    if (index === max) {
      setTimeout(() => {
        this.showDisplay = false;
      }, 500);
      this.canPlay = true;
      this.playsToScore = this.order.length;
    } else
      setTimeout(() => {
        this.displayValue(index, max);
      }, 300);
  }

  getBtnValue(event) {
    if (this.order[this.playerTry] === event) {
      this.playerTry += 1;
      if (this.playerTry === this.playsToScore) {
        this.currentScore += 1;
        this.newRound();
      }
    } else {
      //this.resetGame();
      this.router.navigate(['finish', { score: this.currentScore }]);
    }
  }

  resetGame() {
    this.canPlay = false;

    this.display = 0;
    this.order = [];

    this.currentScore = 0;
  }
}
