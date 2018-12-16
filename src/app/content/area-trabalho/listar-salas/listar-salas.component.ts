import { Component, OnInit, Injectable } from '@angular/core';
import { Bd } from '../../../bd.service';
import { Identidade } from '../../../shared/identidade.model';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
@Injectable()
export class ListarSalasComponent implements OnInit {
  salas: Identidade[]
  constructor(private banco: Bd) { }

  ngOnInit() {
    this.salas = this.banco.salas
  }

}
