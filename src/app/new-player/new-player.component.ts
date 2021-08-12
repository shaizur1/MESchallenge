import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z 0-9@._-]+$')]],
    });
  }

  addPlayer(name) {
    return this.httpRequestsService.addProduct(name, company, description, price, image);
  }

}
