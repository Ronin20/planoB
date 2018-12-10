import { Bd } from './../bd.service';
import { Sala } from './../shared/sala.model';
//import { SALAS_E } from './../salas-mocks';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit {
  
  //public salas: Sala[] = SALAS_E
  ideias: Observable<any>;
  categorias: Observable<any[]>
  cats: any[]


  


  constructor(private banco: Bd) {}

  ngOnInit() {
    this.categorias = this.banco.getAll('944')
    this.cats = this.banco.getCategorias('944')
  }
  exibir(): void {
    //console.log(this.cats)
    //console.log(this.cats)
    const mostra = item => this.banco.getAll(item))
    this.categorias.forEach(mostra)
    //console.log(this.categorias)
  }

  teste(): string{
    return 'ola'
  }

}
