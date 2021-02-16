import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
// npm i @ngx-pwa/local-storage
import { LocalStorage } from '@ngx-pwa/local-storage';
// custom
import { HttpService } from '../../services/http.service';
import { SoundService } from '../../services/sound.service';
@Component({
  selector: 'end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss'],
})
export class EndGameComponent implements OnInit {
  private readonly _ngUnsubscribe: Subject<any> = new Subject();
  readonly closeIcon = {
    src: '../../../assets/images/fechar.svg',
    alt: 'Close btn',
  };

  score: any; // => pontuacao final
  userName: string; // => nome do jogador
  disabled: boolean; // => flag para desativar o botao

  constructor(
    private readonly storage: LocalStorage,
    private readonly router: Router,
    private readonly sound: SoundService,
    private readonly httpService: HttpService
  ) {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.userName) this.saveScore();
  }

  ngOnInit(): void {
    this.storage.getItem('score').subscribe((score) => {
      if (score || score === 0) {
        this.score = score;
        this.disabled = false;
        this.clearScore();
      } else this.abort();
    });
  }

  playAgain(): void {
    this.sound.btnSound();
    this.router.navigate(['']);
  }

  saveScore(): void {
    this.sound.btnSound();
    this.disabled = true;
    const data = {
      name: this.userName,
      score: this.score,
    };
    this.httpService
      .PostService('save', data, null)
      .pipe(
        map((data) => data),
        takeUntil(this._ngUnsubscribe)
      )
      .subscribe((posted) => {
        this.router.navigate(['/ranking']);
      });
  }

  clearScore(): void {
    this.storage.removeItem('score').subscribe((remove) => {});
  }

  abort(): void {
    this.clearScore();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
