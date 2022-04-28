import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  usuarios: any;
  constructor(private serviceUsuario: UsuarioService) {
    this.serviceUsuario.getAll().subscribe(x => this.usuarios = x)
   }
  gravar(dados: any){
    this.serviceUsuario.gravar(dados).subscribe(x => window.location.reload())
  }

  excluir(id: any){
    this.serviceUsuario.excluir(id).subscribe(x => {window.location.reload()})
 }


  ngOnInit(): void {
  }

}
