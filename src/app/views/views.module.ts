import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './home/home.component';
import { InGameComponent } from './in-game/in-game.component';
import { EndGameComponent } from './end-game/end-game.component';
import { RankComponent } from './rank/rank.component';

// Aux components
import { KeyBoardComponent } from './../common/components/key-board/key-board.component';

@NgModule({
  declarations: [
    HomeComponent,
    InGameComponent,
    EndGameComponent,
    RankComponent,
    //aux
    KeyBoardComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent, InGameComponent, EndGameComponent, RankComponent],
})
export class ViewsModule {}
