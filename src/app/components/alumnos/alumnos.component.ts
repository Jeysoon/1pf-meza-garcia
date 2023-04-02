import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = ['id','nombre', 'fotografia', 'inscrito', 'experiencia', 'fechaIngreso', 'acciones'];

  constructor(private alumnosService: AlumnosService, private router: Router ) { }
  alumnos$!: Observable<Alumno[]>;
  ngOnInit() {
    this.alumnos$ = this.alumnosService.traerAlumnos()
    this.alumnosService.traerAlumnos().subscribe((data) => {
      console.log('tragedia', data);
      this.dataSource.data = data;
    })
  }
  onEdit(alumno: Alumno){
    const dateObj = new Date(alumno.fechaIngreso);
const formattedDate = dateObj.toISOString().substr(0, 10);
    this.router.navigate(['/crear'], {state: { data: {...alumno, fechaIngreso: formattedDate}}});
      }
    onDelete(alumno: Alumno){
    this.alumnosService.delete(alumno.id);
    this.alumnosService.traerAlumnos().subscribe((data) => {
      console.log('reload', data);
    this.dataSource.data = data;
    })
    }
}
