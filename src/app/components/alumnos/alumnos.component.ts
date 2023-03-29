import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private alumnosService: AlumnosService ) { }
  alumnos$!: Observable<Alumno[]>;
  ngOnInit() {
    this.alumnos$ = this.alumnosService.traerAlumnos();
  }
}
