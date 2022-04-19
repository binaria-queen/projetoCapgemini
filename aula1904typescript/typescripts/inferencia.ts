var a;
a = 10;
a = "ola";

var b = 10;

type Contato = {
    id: number;
    nome: string;
    fone: string;
    email: string;
    
}

var ct: Contato = {id: 0, nome: '', fone: '', email: ''}
ct.id = 10;
ct.nome = 'Jaqueline';
ct.email = "jaque@gmail.com";
ct.fone = '1234-2323';


console.log(ct)

