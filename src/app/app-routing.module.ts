import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './component/content/content.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [

  {
    path: "", component:ContentComponent
  },
  {
    path: "contacto", component:ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
