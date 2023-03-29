import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchBoolean'
})
export class WatchBooleanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Alumno Inscrito' : 'Alumno No Inscrito';
  }

}
