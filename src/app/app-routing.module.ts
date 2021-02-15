import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Template
import { BackGroundComponent } from './common/layouts/back-ground.component';

// Components
import { HomeComponent } from './views/home/home.component';
import { InGameComponent } from './views/in-game/in-game.component';
import { EndGameComponent } from './views/end-game/end-game.component';
import { RankComponent } from './views/rank/rank.component';

const routes: Routes = [
  {
    path: '',
    component: BackGroundComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'play', component: InGameComponent },
      { path: 'finish', component: EndGameComponent },
      { path: 'ranking', component: RankComponent },
    ],
  },
  // handle wrong urls
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
