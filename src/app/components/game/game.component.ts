import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service'; 
import { GameService } from '../../services/game.service'; 
import { Subscription } from 'rxjs';
import { Player } from '../../models/player';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  bestScorer: any = {};
  players: Player[];
  playerSub: Subscription;
  reactiveForm: FormGroup;
  randomNumber;
  isFinished = false;

  constructor(private httpRequestsService: HttpRequestsService, private gameService: GameService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getBestScorer();
    this.showForm();
    this.gameService.showTimer();
    this.randomNumber = this.gameService.randomAnumber();
  }

  showForm() {
    this.reactiveForm = this.formBuilder.group({
      guess: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  getBestScorer() {
    this.playerSub = this.httpRequestsService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
      let theBest;
      this.players.forEach(player => {
        if(theBest) {
          if(player.score < theBest.score) {
            theBest = player;
            this.bestScorer = theBest;
          }
        } else {
          theBest = player;
          this.bestScorer = theBest;
        }
      });
    });
  }

  getGuess(guess) {
    const result = this.gameService.checkGuess(this.randomNumber, guess);
    this.gameService.currentPlayer.incrementGuess();
    this.isFinished = result === '++++';
    if (this.isFinished) {
      this.gameService.currentPlayer.finishPlaying();
      this.gameService.currentPlayer.calculateScore();
      this.httpRequestsService.addScore(this.gameService.currentPlayer.name, this.gameService.currentPlayer.score)
    }
  }
  
  getIsFinished() {
    return this.isFinished;
  }

  ngOnDestroy() {
    this.playerSub.unsubscribe();
  }
}
