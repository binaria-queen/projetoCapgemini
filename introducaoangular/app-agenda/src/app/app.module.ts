import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroContatoComponent,
    ConsultaCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
