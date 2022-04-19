class Itens{
    descricao: string;
    preco: number;
    qtde: number;

    constructor(descricao: string, preco: number, qtde: number){
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }


    totalItem(): number{
       return this.qtde * this.preco;    
    }

    valorDesconto(taxa:number):number{
        return this.preco * (taxa/100);
    }

    display(taxa:number): void{
        console.log(`
            Descrição..: ${this.descricao}
            Preço......: ${this.preco}
            Quantidade.: ${this.qtde}
            Subtotal...: ${this.totalItem()}
            R$ desconto: ${this.valorDesconto(taxa)*this.qtde}
            R$ pago....: ${this.totalItem() - this.valorDesconto(taxa)}
        `)
    }

}

let iteml = new Itens('Celular', 1500, 3);
iteml.display(10)