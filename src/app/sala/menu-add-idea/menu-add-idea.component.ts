import { SALAS_E } from './../../salas-mocks';
import { Bd } from './../../bd.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase'
import { Sala } from 'src/app/shared/sala.model';

@Component({
  selector: 'app-menu-add-idea',
  templateUrl: './menu-add-idea.component.html',
  styleUrls: ['./menu-add-idea.component.css']
})
export class MenuAddIdeaComponent implements OnInit {
  
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
    this.bd.atualiza_dados('944')
  }

}
