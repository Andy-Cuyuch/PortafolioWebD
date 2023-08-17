import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StyleClassModule} from 'primeng/styleclass';



import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { ContentComponent } from './component/content/content.component';
import { ContactComponent } from './component/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContactComponent
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
