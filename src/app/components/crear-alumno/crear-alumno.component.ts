import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css'],
})
export class CrearAlumnoComponent implements OnInit {
  crearAlumno: FormGroup;
  routeData: any;
  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const controles: any = {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', Validators.required),
      fotografia: new FormControl('', [Validators.required]),
      inscrito: new FormControl(false, [Validators.required]),
      experiencia: new FormControl(null, [Validators.required]),
      fechaIngreso: new FormControl(null, [Validators.required]),
    };
    this.crearAlumno = new FormGroup(controles);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Get the static data from the state object
      this.routeData = window.history.state.data;
      if (this.routeData) {
        this.crearAlumno.patchValue(this.routeData);
      } else {
        this.crearAlumno.reset();
      }
    });
  }
  onCreateStudent() {
    const outputDateString = new Date(this.crearAlumno.value.fechaIngreso);
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    const payload = {
      ...this.crearAlumno.value,
      fechaIngreso: outputDateString.toISOString(),
      id: randomNumber,
    };

    this.alumnoService.create(payload).subscribe(() => {
      this.alumnoService.showCreateSuccess = true;
      this.router.navigate(['/todos']);
    });
  }
  onUpdateStudent() {
    const updatePayload = {
      ...this.crearAlumno.value,
      id: this.routeData?.id,
    };
    this.alumnoService.update(updatePayload).subscribe(() => {
      this.alumnoService.showEditSuccess = true;
      this.router.navigate(['/todos']);
    });
  }
}
