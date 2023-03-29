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

@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      CrearAlumnoComponent,
      WatchBooleanPipe,
      AlumnosComponent,
      AlumnoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
