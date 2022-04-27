"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, contato) {
        this.id = id;
        this.nome = nome;
        this.contato = contato;
    }
    display() {
        return `Id: ${this.id} Nome: ${this.nome} Contato: ${this.contato}`;
    }
}
exports.default = Pessoa;
