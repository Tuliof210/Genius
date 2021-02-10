import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BackGroundComponent } from './common/back-ground/back-ground.component';
import { HomeComponent } from './views/home/home.component';
import { InGameComponent } from './views/in-game/in-game.component';
import { EndGameComponent } from './views/end-game/end-game.component';
import { RankComponent } from './views/rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    BackGroundComponent,
    HomeComponent,
    InGameComponent,
    EndGameComponent,
    RankComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
