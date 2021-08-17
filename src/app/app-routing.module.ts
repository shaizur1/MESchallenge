import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';

const routes: Routes = [
  { path: '', component: NewPlayerComponent},
  { path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
