function ola(text: string): string;
function ola(text: number): string;

function ola(text: any): any{
    return `ola ${text}`
}

/* leva em conta a quantidade de parametros e/ou tipo de parametro*/

console.log(ola('Tudo bem joaozinho'))
console.log(ola(100))