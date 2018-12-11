import { Bd } from './../bd.service';
import { Sala } from './../shared/sala.model';
//import { SALAS_E } from './../salas-mocks';
import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit, OnDestroy {
  
  //public salas: Sala[] = SALAS_E
  //ideias: Observable<any>;
  categorias: Observable<any>
  ideias2: Observable<any> = this.banco.ideias2
  
  cats: any[] = this.banco.cats
  ideias: any[] = this.banco.getIdeas('Categoria 5')

  
  constructor(private banco: Bd) {

  }

  ngOnInit() {
    console.log('a sala eh: ', this.banco.idSala)
    this.categorias = this.banco.categorias
  }
  ngOnDestroy(): void {
    console.log('fui destruido')
    this.categorias = null
  
  }
  exibir(): void {
   
    this.banco.getAllIdeas3()
    
  }
 
  teste(): string{
    return 'ola'
  }

}
