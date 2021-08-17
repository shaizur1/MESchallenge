import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  players = 'http://localhost:3001/Players';

  constructor(private http: HttpClient) { }

  addScore(name, score){
    const addScoreObject = {
      name: name,
      score: score
    };
    this.http.post(`${this.players}/add`, addScoreObject).subscribe(res => console.log(res));
  }

  getPlayers() {
    return this.http.get(`${this.players}`);
  }
}

