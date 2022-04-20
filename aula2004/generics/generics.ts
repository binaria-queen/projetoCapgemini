// <> operador diamante e coloca o tipo dentro desse operador

class Contato {
    nome: string;
    fone: string;
    constructor(nome: string, fone: string) {
        this.nome = nome;
        this.fone = fone;
    }
}

function testeGenerics<T>(x: T): T {
    return x;
}
console.log(testeGenerics<string>("Olá mundo"))
console.log(testeGenerics<number>(1500))

let ct = new Contato('Maria', '122-3456');
console.log(testeGenerics<Contato>(ct))


function lista<T>(n1: T, n2: T): T[]{
    let x: T[] = [n1, n2]
    return x;
}
console.log(lista<string>('Maria', 'maria@gmail.com'))

function listaComIdade<T,U,Z>(p1: T, p2: U, p3: Z): void{
    console.log(` ${p1} ${p2}  ${p3}`)

}
listaComIdade<string, number, boolean>('maria', 20, false); //lista com parâmetro

listaComIdade<number, boolean, string>(10,false, 'ola') 

listaComIdade<string, number, number[]>('maria', 75, [7, 6.5, 9])
