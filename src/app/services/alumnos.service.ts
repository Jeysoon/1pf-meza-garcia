import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Alumno{
  id: number;
  fechaIngreso: Date;
  nombre: string;
  apellido: string;
  fotografia: string
  inscrito: boolean;
  experiencia: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

constructor(private http: HttpClient) { }

showEditSuccess = false;
showCreateSuccess = false;
showDeleteSuccess = false;

traerAlumnos(){
  return this.http.get<Alumno[]>(environment.baseUrl);
}

getById(id: number): Observable<Alumno> {
  return this.http.get<Alumno>(`${environment.baseUrl}/${id}`);
}

create(product: Alumno): Observable<Alumno> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post<Alumno>(environment.baseUrl, product, httpOptions);
}

update(product: Alumno): Observable<Alumno> {
  return this.http.put<Alumno>(`${environment.baseUrl}/${product.id}`, product);
}

// delete(id: number): Observable<Alumno> {
//   debugger;
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };
//   return this.http.delete<Alumno>(`${environment.baseUrl}/${id}`,{headers: httpOptions.headers});
// }
delete(id: number) {
  const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  return this.http.delete(`${environment.baseUrl}/${id}`, {headers: httpOptions.headers});
}

}
