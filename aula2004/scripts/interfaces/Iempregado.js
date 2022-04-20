"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//a class empregado vai implementar a interface IEmployee
class Empregado {
    constructor(empCode, empName, empFone) {
        this.empCode = empCode;
        this.empName = empName;
        this.empFone = empFone;
    }
    //implementar o retorno
    getSalary(salario) {
        return salario;
    }
    //implementar o retorno 
    getManagerName(nome) {
        return nome;
    }
    salvar() {
        return true;
    }
    alterar(objeto) {
        return true;
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorId(id) {
        return 'maria';
    }
    excluir(id) {
        //
    }
}
