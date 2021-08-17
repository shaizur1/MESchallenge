import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentPlayer: Player;

  addPlayer(name) { 
    let newPlayer = new Player(name);
    this.currentPlayer = newPlayer;
  }
  
  checkGuess(computer, player) {
    let result = ''
    for (let i = 0; i < 4; i++) {
      if(computer[i] === player[i]) {
        result += '+';
      }
      else if(computer.includes(player[i])) {
        result += '-';
      } 
    }
    alert(result);
    return result;
  }

  showTimer() {
    let minutesLabel = document.getElementById('minutes');
    let secondsLabel = document.getElementById('seconds');
    let totalSeconds = 0;
    setInterval(setTime, 1000, this.currentPlayer);
  
    function setTime(currPlayer) {
      if(currPlayer.isPlaying) {
      ++totalSeconds;
      currPlayer.setTime(totalSeconds);
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(Math.floor(totalSeconds / 60));
      }
    }

    function pad(val) {
      let valString = val + '';
      if (valString.length < 2) {
        return '0' + valString;
      } else {
        return valString;
      }
    }
  }

  randomAnumber() {
    let text = '';
    let possible = '0123456789';
    for (var i = 0; i < 4; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(text);
    return text;
  }
}
