import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../services/alumnos.service';

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(value: Alumno, args?: any): any {
    return `${value.nombre} ${value.apellido}` ;
  }

}
