var nome="Jaqueline"
console.log(nome)

var peso= 69
console.log(peso)

const preco = 7.90
console.log(preco)

let estoque = 100
console.log(estoque)

if (estoque <200) {
    let desconto = estoque * 0.10
    console.log(desconto)
}


//array em javascript


const cars = ["Saab", "Volvo","BMW"];
console.log(cars) 

cars.push('fusca') //push: inserir uma string no array 
console.log(cars)

cars.unshift('bicicleta') //unshift: adicionou bicicleta no inicio
console.log(cars)
delete cars[2] //deletou o conteúdo da posição 2
cars.pop()
console.log(cars)//pop: remove o ultimo 

cars.shift()
console.log(cars)//shift: remove o primeiro

cars[1]="Volvo"
console.log(cars)

//objeto 
var contato = {
    nome: "Jose",
    idade: 10,
    fone: "1234-9839"
}

console.log(contato)

//função dentro do objeto
var x = function soma(n1, n2){return n1+n2}
console.log(x(10,20))

//princípio da imutabilidade
var fruta = "maça"; //como eu declarei outro nome na mesma variavel a primeira é substituida pela segunda
fruta = "melancia";
console.log(fruta)
