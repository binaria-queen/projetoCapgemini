import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';


const appRoutes: Routes = [
  {
    path:'cadastrocontato',
    component:CadastroContatoComponent
  },
  {
    path:'consultacadastro',
    component:ConsultaCadastroComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CadastroContatoComponent,
    ConsultaCadastroComponent,
    ConsultaContatoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
  
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
