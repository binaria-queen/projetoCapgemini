"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Produto_1 = __importDefault(require("./Produto"));
const Carinho_1 = __importDefault(require("./Carinho"));
let feijao;
feijao = new Produto_1.default('Feijão preto', 5, 10);
let arroz = new Produto_1.default('Arroz', 14.90, 25);
let it1 = new Item_1.default(feijao, feijao.valorUnitario, 2);
let it2 = new Item_1.default(arroz, arroz.valorUnitario, 3);
console.log(it1);
console.log(it2);
let c1;
c1 = new Carinho_1.default('20/04/2022', 'jose');
c1.add(it1);
c1.add(it2);
console.log(c1);
c1.remove(it1);
console.log(c1);
console.log(c1.itens[0].produto.descricao);
