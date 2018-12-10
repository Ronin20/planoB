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
  //public salas: any
  salas: Observable<any>;
  categorias: Observable<any[]>
  constructor(private banco: Bd) {}

  ngOnInit() {
    this.salas = this.banco.getAll('944')
  }
  exibir(): void {
    console.log(this.salas.key)
  }


}
