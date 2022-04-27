import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';

@Component({
  selector: 'app-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent implements OnInit {

  contatos: any;

  constructor(private serviceContato: ServiceContatoService) {
    this.serviceContato.getAll().subscribe(x => this.contatos = x)
   }

  ngOnInit(): void {
  }

}
