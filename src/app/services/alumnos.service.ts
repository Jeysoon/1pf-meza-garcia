import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Alumno{
  id: string;
  fechaIngreso: Date;
  nombre: string;
  fotografia: string
  inscrito: boolean;
  experiencia: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

constructor(private http: HttpClient) { }

traerAlumnos(){
  return this.http.get<Alumno[]>(environment.baseUrl);
}

}
