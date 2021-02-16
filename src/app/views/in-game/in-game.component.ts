import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// npm i @ngx-pwa/local-storage
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.scss'],
})
export class InGameComponent implements OnInit {
  enableKeyboard: boolean; // => ativa / desativa teclado
  displayNumbers: boolean; // => controla quando os numeros podem ser exibidos

  display: number; // => numero exibido
  currentScore: number; // => pontuacao ate o momento
  playsToScore: number; // => quantidade de acertos necessarios para pontuar
  currentTry: number; // => jogada atual

  numList: number[]; // => armazena a sequencia atual
  countDown: any; // => armazena o contador

  constructor(
    private readonly storage: LocalStorage,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.resetGame();
    this.start();
  }

  resetGame(): void {
    this.enableKeyboard = false;
    this.displayNumbers = false;
    this.currentScore = 0;
    this.numList = [];
  }

  // 1s de espera para o jogador se preparar
  start(): void {
    setTimeout(() => {
      this.newRound();
    }, 1000);
  }

  newRound(): void {
    this.enableKeyboard = false;
    this.currentTry = 0;
    // add numero aleatorio na sequencia, entre 1 e 9
    this.numList.push(Math.floor(Math.random() * 10) || 1);
    this.displayValue(0, this.numList.length);
  }

  // executado recursivamente a cada 300ms ate que exiba toda a sequencia
  displayValue(index, max): void {
    this.display = this.numList[index];
    this.displayNumbers = true;

    index++;
    if (index === max) {
      setTimeout(() => {
        this.displayNumbers = false;
        this.enableKeyboard = true;
      }, 300);

      this.playsToScore = max;
    } else
      setTimeout(() => {
        this.displayValue(index, max);
      }, 300);
  }

  // executado ao receber um novo numero do teclado
  getKey(key): void {
    if (this.numList[this.currentTry] === key) {
      this.currentTry += 1;
      if (this.currentTry === this.playsToScore) {
        this.currentScore += 1;
        this.newRound();
      }
    } else this.gameOver();
  }

  gameOver(): void {
    this.storage.setItem('score', this.currentScore).subscribe((done) => {
      if (done) this.router.navigate(['finish']);
      else this.abort();
    });
  }

  abort(): void {
    this.router.navigate(['']);
    alert('ops');
  }
}
