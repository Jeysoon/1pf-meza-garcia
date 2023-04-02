import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { WatchBooleanPipe } from './pipes/watch-boolean.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { DefaultFontHeaderDirective } from './directives/defaultFontHeader.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      CrearAlumnoComponent,
      WatchBooleanPipe,
      AlumnosComponent,
      AlumnoComponent,
      CompleteNamePipe,
      DefaultFontHeaderDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
