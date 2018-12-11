import { Bd } from './../bd.service';
import { Sala } from './../shared/sala.model';
//import { SALAS_E } from './../salas-mocks';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit {
  
  //public salas: Sala[] = SALAS_E
  //ideias: Observable<any>;
  categorias: Observable<any>= this.banco.categorias
  cats: any[] = this.banco.cats
  ideias: any[] = this.banco.ideias
  constructor(private banco: Bd) {}

  ngOnInit() {
    //this.categorias = this.banco.getAll()
    //this.cats = this.banco.getCategorias()
    //console.log('Estou no ng on init e a categoria passada é: ', this.cats[0])
    //this.ideias = this.banco.getIdeas('Categoria 3') // o problema esta aqui, cat[0] eh nulo neste momento
  }
  exibir(): void {
    console.log(this.ideias)
    //console.log(this.cats)
    //console.log(this.cats)
    //console.log(this.cats)
    //const mostra = item => console.log(item.key)
    //this.categorias.forEach(mostra)
    //console.log(this.categorias)
  }

  teste(): string{
    return 'ola'
  }

}
