"use strict";
class Itens {
    constructor(descricao, preco, qtde) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    totalItem() {
        return this.qtde * this.preco;
    }
    valorDesconto(taxa) {
        return this.preco * (taxa / 100);
    }
    display(taxa) {
        console.log(`
            Descrição..: ${this.descricao}
            Preço......: ${this.preco}
            Quantidade.: ${this.qtde}
            Subtotal...: ${this.totalItem()}
            R$ desconto: ${this.valorDesconto(taxa) * this.qtde}
            R$ pago....: ${this.totalItem() - this.valorDesconto(taxa)}
        `);
    }
}
let iteml = new Itens('Celular', 1500, 3);
iteml.display(10);
