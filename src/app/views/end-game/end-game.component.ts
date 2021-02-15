import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  score;
  userName: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly httpService: HttpService
  ) {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.userName) {
      this.saveScore();
      //return false;
    }
  }

  ngOnInit(): void {
    this.score = parseInt(this.route.snapshot.paramMap.get('score'));
  }

  playAgain() {
    this.router.navigate(['/ranking']);
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
        // Add Loader spin
        this.playAgain();
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
