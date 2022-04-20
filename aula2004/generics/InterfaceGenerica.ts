//a interface é criada primeiro
interface IDaoGenerica<T>{
    salvar(): boolean;
    excluir(id: number): boolean;
    consultarTodos(): T[];
    consultarPeloId(id: number): T;
    alterar(objeto: T): boolean;
}
//Como usar essa interface na classe? 

export {IDaoGenerica}