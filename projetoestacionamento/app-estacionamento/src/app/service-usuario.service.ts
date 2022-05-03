import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {

  constructor(private http: HttpClient) { }

  consultarTodos(){
    let url = 'http://localhost:8081/usuarios';
    return this.http.get(url);
  }
  getAll(){
    let url = 'http://localhost:8081/usuarios';
   return this.http.get(url)
  }
  gravar(dados: any){
    let url = 'http://localhost:8081/usuarios';
    return this.http.post(url,dados)
  }
  excluir(idusuarios: number){
    return this.http.delete(`http://localhost:8081/usuarios/${idusuarios}`)
  }
}
