import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {

  constructor(private http: HttpClient) { }

  salvar(data:any){
    let url = 'http://localhost:3000/contato';
    return this.http.post(url,data);
  }
  consultarTodos(){
    let url = 'http://localhost:3000/contato';
    return this.http.get(url);
  }
}
