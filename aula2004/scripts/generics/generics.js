"use strict";
// <> operador diamante e coloca o tipo dentro desse operador
class Contato {
    constructor(nome, fone) {
        this.nome = nome;
        this.fone = fone;
    }
}
function testeGenerics(x) {
    return x;
}
console.log(testeGenerics("Olá mundo"));
console.log(testeGenerics(1500));
let ct = new Contato('Maria', '122-3456');
console.log(testeGenerics(ct));
function lista(n1, n2) {
    let x = [n1, n2];
    return x;
}
console.log(lista('Maria', 'maria@gmail.com'));
function listaComIdade(p1, p2, p3) {
    console.log(` ${p1} ${p2}  ${p3}`);
}
listaComIdade('maria', 20, false); //lista com parâmetro
listaComIdade(10, false, 'ola');
listaComIdade('maria', 75, [7, 6.5, 9]);
