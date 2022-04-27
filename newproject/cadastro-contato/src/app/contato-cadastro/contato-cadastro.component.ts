import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';

@Component({
  selector: 'app-contato-cadastro',
  templateUrl: './contato-cadastro.component.html',
  styleUrls: ['./contato-cadastro.component.css']
})
export class ContatoCadastroComponent implements OnInit {
  msg: string = "";
  
  saveContato(data: any) {
    this.serviceContato.save(data).subscribe( x => this.msg = "Contato salvo com sucesso." )
  }

  nome: string = "chaves";
  constructor(private serviceContato: ServiceContatoService) { }

  ngOnInit(): void {
  }

}
