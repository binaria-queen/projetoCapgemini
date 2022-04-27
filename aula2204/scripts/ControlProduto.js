"use strict";
class Produto {
    constructor(id, descricao, preco, estoque) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }
}
class ModelProduto {
    salvar(obj) {
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    //callback é o nome da função e (lista:Produto[]) é o tipo dessa função
    consultarTodos(callback) {
        fetch('http://localhost:3000/produtos')
            .then(x => x.json())
            .then(data => callback(data));
    }
    //quando o servidor responder vc vai passar os dados para a callback
    // callback com assinatura de função e paramento produto com um corpo
    // solucao 1)callback e 2)async/await => promisse
    consultarPorId(id, callback) {
        fetch(`http://localhost:3000/produtos/${id}`)
            .then(x => x.json())
            .then(data => callback(data));
    }
}
/*Controller item */
class Item {
    constructor(produto, precoItem, qtde) {
        this.produto = produto;
        this.precoItem = precoItem;
        this.qtde = qtde;
    }
}
/*Modelo item */
class ModelItem {
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback) {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id, callback) {
        throw new Error("Method not implemented.");
    }
    salvar(it) {
        fetch("http://localhost:3000/itens", {
            method: 'POST',
            body: JSON.stringify(it),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
}
/*CARRINHO DE COMPRAS */
class Carrinho {
    constructor(data, cliente, finalizado) {
        this.itens = [];
        this.data = data;
        this.cliente = cliente;
        this.finalizado = false;
    }
    add(it) {
        this.itens.push(it);
    }
}
/*Gravar o carrinho no banco de dados */
class ModelCarrinho {
    salvar(obj) {
        fetch("http://localhost:3000/carrinho", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback) {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id, callback) {
        throw new Error("Method not implemented.");
    }
}
