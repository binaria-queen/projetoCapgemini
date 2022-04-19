"use strict";
class Pessoa {
    constructor(id, nome, fone, email) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }
    display() {
        console.log(`
        Id: ${this.id} 
        Nome: ${this.nome} 
        Fone: ${this.fone} 
        Email: ${this.email}`);
    }
}
let ps = new Pessoa(10, 'Maria', '123', 'maria@gmail.com');
ps.display();
