import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
// sound
import { SoundService } from '../../services/sound.service';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent implements OnInit {
  private readonly _ngUnsubscribe: Subject<any> = new Subject();
  readonly comeBack = {
    src: '../../../assets/images/voltar.svg',
    alt: 'Come back btn',
  };

  rankList: any; // => dados recebidos do servidor
  rankListView: any[]; // => dados tratados para exibição

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService,
    private readonly sound: SoundService
  ) {}

  ngOnInit(): void {
    this.getRanking();
  }

  getRanking(): void {
    this.rankList = [];
    this.httpService
      .GetService('ranking')
      .pipe(
        map((data) => data),
        takeUntil(this._ngUnsubscribe)
      )
      .subscribe((rank) => {
        this.rankList = rank;
        this.normalizeData();
      });
  }

  normalizeData(): void {
    // Ordenar do maior para o menor
    this.rankList = this.rankList.sort((a, b) => b['score'] - a['score']);
    // Normalizar dados recebidos
    this.rankListView = this.rankList.map((user, index) => ({
      pos: 1 + index,
      name: user['name'],
      score: user['score'],
    }));
  }

  goBackHome(): void {
    this.sound.press();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
