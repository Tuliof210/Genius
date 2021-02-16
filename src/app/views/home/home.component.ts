import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// sound
import { SoundService } from '../../services/sound.service';
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

  constructor(
    private readonly router: Router,
    private readonly sound: SoundService
  ) {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') this.start();
  }

  ngOnInit(): void {}

  // Start game
  start(): void {
    this.sound.btnSound();
    this.router.navigate(['play']);
  }

  // Show ranking
  showRanking(): void {
    this.sound.btnSound();
    this.router.navigate(['ranking']);
  }
}
