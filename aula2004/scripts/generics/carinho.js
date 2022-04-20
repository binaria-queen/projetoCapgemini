"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Produto_1 = require("./Produto");
/*let feijao: Produto;
feijao = new Produto('Feijão preto',5, 10);

let arroz = new Produto('Arroz',14.90, 25);

let it1: Item = new Item(feijao, feijao.valorUnitario, 2);
let it2 = new Item(arroz, arroz.valorUnitario, 3);

let carrinho:Item[] = [it1, it2]

carrinho.push(new Item(feijao, feijao.valorUnitario,3))

console.log(carrinho)*/
class Carrinho {
    constructor(itens, data, cliente, finalizado) {
        this.itens = itens;
        this.data = data;
        this.cliente = cliente;
        this.finalizado = finalizado;
    }
    add(it) {
        throw new Error("Method not implemented.");
    }
    remove(it) {
        throw new Error("Method not implemented.");
    }
    getTotal() {
        throw new Error("Method not implemented.");
    }
    finalizar() {
        throw new Error("Method not implemented.");
    }
}
exports.default = Carrinho;
let feijao;
feijao = new Produto_1.Produto('Feijão preto', 5, 10);
let arroz = new Produto_1.Produto('Arroz', 14.90, 25);
let it1 = new Item_1.default(feijao, feijao.valorUnitario, 2);
let it2 = new Item_1.default(arroz, arroz.valorUnitario, 3);
let carrinho = [it1, it2];
carrinho.push(new Item_1.default(feijao, feijao.valorUnitario, 3));
console.log(carrinho);
