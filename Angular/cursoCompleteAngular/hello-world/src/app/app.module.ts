//INSTALAR AUTO-IMPORT NAS EXTENSÕES

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';

  @NgModule({
    //Adicionamos todos os 
  //componentes aqui na nossa aplicação
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
