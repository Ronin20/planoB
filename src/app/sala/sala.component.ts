import { Bd } from './../bd.service';
import { Categoria } from './../shared/categoria.model';
import { Sala } from './../shared/sala.model';
import { SALAS_E } from './../salas-mocks';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase'
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit {
  
  public salas: Sala[] = SALAS_E
  
  public form_add_ideia: FormGroup = new FormGroup({
    'new_idea': new FormControl(null),
    'categoria': new FormControl(null)
  })

  constructor(
    private bd: Bd
    
  ) { }

  ngOnInit() {
    
  }

  public addIdeia(): void {
    this.bd.adicionar_ideia({
      idSala: '944',
      categoria: this.form_add_ideia.value.categoria,
      ideia: this.form_add_ideia.value.new_idea
    })
  }

}
