import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  // Start game
  start(): void {
    this.router.navigate(['play']);
  }

  // Show ranking
  showRanking(): void {
    this.router.navigate(['ranking']);
  }
}
