import { Sala } from './../shared/sala.model';
import { SALAS_E } from './../salas-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  public salas: Sala[] = SALAS_E
  
  constructor() { }

  ngOnInit() {
  }

}
