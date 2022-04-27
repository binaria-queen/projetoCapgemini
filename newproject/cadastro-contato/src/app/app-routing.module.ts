import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';

const routes: Routes = [
  {
    path: 'contatocadastro',
    component: ContatoCadastroComponent
  },
  {
    path: 'consultacadastro',
    component: ConsultaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
