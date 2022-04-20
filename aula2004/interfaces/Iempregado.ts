import {IEmployee, IDao} from './interfaces'

//a class empregado vai implementar a interface IEmployee
class Empregado implements IEmployee, IDao{
    empCode: number;
    empName: string;
    empFone: string;
    constructor(empCode: number, empName: string, empFone: string){
        this.empCode = empCode;
        this.empName = empName;
        this.empFone = empFone;
    }
    //implementar o retorno
    getSalary(salario: number): number{
        return salario;
    }
    //implementar o retorno 
    getManagerName(nome: string): string {
        return nome;        
    }

    salvar(): boolean {
        return true;
    }

    alterar(objeto: string): boolean {
        return true;
    }
    consultar(): string[] {
        let x: string[] = [];
        return x;
    }

    consultarPorId(id: number): string {
        return 'maria';
    }
    excluir(id: number): void {
        //
    }
}