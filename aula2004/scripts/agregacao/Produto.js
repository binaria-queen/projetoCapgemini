"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(descricao, valorUnitario, estoque) {
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
        this.estoque = estoque;
    }
    salvar() {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos() {
        throw new Error("Method not implemented.");
    }
    consultarPeloId(id) {
        throw new Error("Method not implemented.");
    }
    alterar(objeto) {
        throw new Error("Method not implemented.");
    }
}
exports.default = Produto;
