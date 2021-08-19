import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameService: GameService) { }

  ngOnInit(): void {
    this.showForm();
  }

  showForm() {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z 0-9@._-]+$')]],
    });
  }
  
  getPlayer(name) {
    this.gameService.addPlayer(name);
  }
}
