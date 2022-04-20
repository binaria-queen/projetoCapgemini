// uma interface é o conjunto de todos os métodos abstratos
//precisa dos metodos definidos na interface IEmployee e na
//interface IDao
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary(salario: number): number; //arrow function
    getManagerName(nome: string): string;
}


//CRUD criar() atualizar() consultar() deletar() C-create R-retrieve U-update D-delete
interface IDao{
    salvar(): boolean;
    alterar(objeto: string): boolean;
    consultar(): string[];
    consultarPorId(id: number): string;
    excluir(id: number): void; //não se retorna no excluir
}
export {IEmployee, IDao}