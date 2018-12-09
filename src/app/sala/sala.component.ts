import { Sala } from './../shared/sala.model';
import { SALAS_E } from './../salas-mocks';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit {
  
  public salas: Sala[] = SALAS_E
 

  constructor() {}

  ngOnInit() {
  }
}
