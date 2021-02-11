import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly logoAlt = 'JS G3niu5';
  readonly logoDirecoty = '../../../assets/images/logo.svg';

  constructor() {}

  ngOnInit(): void {}
}
