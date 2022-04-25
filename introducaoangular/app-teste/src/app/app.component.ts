import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu primeiro componente';
  nome: string = "Jaqueline"; //não precisou de um construtor pq ja atribuiu o valor ao nome 

  cliente = {
    id: 10,
    nome: "Yuri",
    telefone: '123-564-00'
  }

  produto = {
    id: 1,
    nome: 'bicicleta',
    preco: 750.00,
    descricao: "aro 29, 35 marchas, freio a disco e banco traseiro. "
  }
}
