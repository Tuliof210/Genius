import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// npm i @ngx-pwa/local-storage
import { LocalStorage } from '@ngx-pwa/local-storage';
// npm i ngx-toastr
import { ToastrService } from 'ngx-toastr';
// sound
import { SoundService } from '../../services/sound.service';
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

  private readonly delay = 300;
  private readonly init = 1000;

  constructor(
    private readonly storage: LocalStorage,
    private readonly router: Router,
    private readonly toastr: ToastrService,
    private readonly sound: SoundService
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
    setTimeout(() => this.newRound(), this.init);
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
    this.sound.show();
    this.display = this.numList[index];
    this.displayNumbers = true;

    index++;
    if (index === max) {
      setTimeout(() => {
        this.displayNumbers = false;
        setTimeout(() => (this.enableKeyboard = true), this.delay);
      }, this.delay);

      this.playsToScore = max;
    } else setTimeout(() => this.displayValue(index, max), this.delay);
  }

  // executado ao receber um novo numero do teclado
  getKey(key): void {
    if (this.numList[this.currentTry] === key) {
      this.currentTry += 1;
      if (this.currentTry === this.playsToScore) {
        this.currentScore += 1;
        setTimeout(() => this.newRound(), this.delay);
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
    this.toastr.error('Desculpe, ocorreu um erro ao computar sua pontuação');
    this.router.navigate(['']);
  }
}
