var numero = "10"

console.log(numero == "10")//testando somente o valor (true)
console.log(numero === "10") //são do mesmo tipo? (false)
console.log(typeof numero)

console.log(numero!= 10)// se é diferente de 10 (testando somente o valor) (false)
console.log(numero!== 10)// é o mesmo valor e o mesmo tipo? (true)

if(numero == "10") {
    console.log("ola")
}