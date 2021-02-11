import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent implements OnInit {
  private readonly _ngUnsubscribe: Subject<any> = new Subject();

  rankList: any;

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getRanking();
  }

  getRanking() {
    this.httpService
      .GetService('ranking')
      .pipe(
        map((data) => data),
        takeUntil(this._ngUnsubscribe)
      )
      .subscribe((rank) => {
        this.rankList = rank;
        this.normalizeData();
        this.printRankList();
      });
  }

  printRankList() {
    console.log(this.rankList);
  }

  normalizeData() {
    // Ordenar do maior para o menor
    this.rankList = this.rankList.sort((a, b) => b['score'] - a['score']);
    // Normalizar dados recebidos
    this.rankList = this.rankList.map((user, index) => ({
      pos: 1 + index,
      name: user['name'],
      score: user['score'],
    }));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
