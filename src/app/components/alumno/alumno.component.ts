import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  constructor() {}
  // <img [src]="alumno.fotografia" [alt]="alumno.nombre" width="64" height="64">
  // <h3>{{ alumno.nombre }}</h3>
  // <p>{{ alumno.fechaIngreso | date}}</p>
  // <p class="enrollment">Inscrito: {{ alumno.inscrito ? 'Sí' : 'No' }}</p>
  _alumno!: Alumno;
  @Input('datos') set datos(val: Alumno) {
    this._alumno = val;
  }
  get alumno(){
    return this._alumno;
  }
  ngOnInit() {}
}
