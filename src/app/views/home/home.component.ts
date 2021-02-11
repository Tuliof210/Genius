import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly logo = {
    src: '../../../assets/images/logo.svg',
    alt: 'JS G3niu5',
  };
  readonly rank = {
    src: '../../../assets/images/ranking.svg',
    alt: 'Ranking btn',
  };

  constructor() {}

  ngOnInit(): void {}
}
