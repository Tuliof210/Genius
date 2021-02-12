import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

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

  @Input() score: number;
  userName: string;

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.score = 850;
    //this.userName = 'Venom';
  }

  playAgain() {
    this.router.navigate(['']);
  }

  saveScore() {
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
        console.log({ posted });
      });
  }

  displayInfo(event) {
    console.log({ key: event.key, user: this.userName });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
