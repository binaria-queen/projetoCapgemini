import { Component, OnInit } from '@angular/core';
import { IProduto } from './../interfaces/interfaces';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  
  frase: string = "ola muNDo daNAdo";

  produto: IProduto = {
     id:0,
     descricao: "Feijão preto",
     preco: 7.85,
     estoque: 9.8
  }

  hoje = new Date();

  descricao: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
