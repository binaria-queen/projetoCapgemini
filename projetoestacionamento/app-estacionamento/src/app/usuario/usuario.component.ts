import { Component, OnInit } from '@angular/core';
import { ServiceUsuarioService } from '../service-usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class  UsuarioComponent implements OnInit {
  usuarios: any;

  constructor(private serviceUsuario: ServiceUsuarioService) {
    this.serviceUsuario.getAll().subscribe(x => this.usuarios = x)
   }


   gravar(dados: any){
     dados = {...dados, perfil: 'USUARIO'}
     console.log(dados)
     this.serviceUsuario.gravar(dados).subscribe(x => {window.location.reload()})
   }

  ngOnInit(): void {
  }

  excluir(id: any){
    this.serviceUsuario.excluir(id).subscribe(x => {window.location.reload()})
  }
  
}
