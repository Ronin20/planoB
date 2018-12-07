import { Sala } from './../shared/sala.model';
import { SALAS_E } from './../salas-mocks';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  public salas: Sala[] = SALAS_E
  
  public form_add_ideia: FormGroup = new FormGroup({
    'new_idea': new FormControl(null),
    'categoria': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {
  }

  public addIdeia(): void {
    console.log(this.form_add_ideia)
  }

}
