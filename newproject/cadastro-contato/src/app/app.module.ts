import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoCadastroComponent,
    ConsultaCadastroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
