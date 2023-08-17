import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {StyleClassModule} from 'primeng/styleclass';

/*Componentes*/
import { ContentComponent } from './component/content/content.component';
import { ContactComponent } from './component/contact/contact.component';
import { DatosGeneralesComponent } from './component/datos-generales/datos-generales.component';
import { InformacionComponent } from './component/informacion/informacion.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { MainComponent } from './component/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContactComponent,
    DatosGeneralesComponent,
    InformacionComponent,
    ProyectosComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
