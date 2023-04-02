import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  constructor(private router: Router) {}
  _alumno!: Alumno;
  @Input('datos') set datos(val: Alumno) {
    this._alumno = val;
  }
  get alumno(){
    return this._alumno;
  }
  ngOnInit() {}
  onEdit(alumno: Alumno){
this.router.navigate(['/crear'], {state: { data: alumno}});
  }
}
