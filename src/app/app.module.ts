import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitulinisComponent } from './titulinis/titulinis.component';
import { ApieComponent } from './apie/apie.component';
import { PaslaugosComponent } from './paslaugos/paslaugos.component';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TitulinisComponent,
    ApieComponent,
    PaslaugosComponent,
    KontaktaiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path:'#', component:TitulinisComponent},
      {path:'apie', component:ApieComponent},
      {path:'paslaugos', component:PaslaugosComponent},
      {path:'kontaktai', component:KontaktaiComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
