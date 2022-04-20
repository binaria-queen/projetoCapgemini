
//CRUD criar() atualizar() consultar() deletar() C-create R-retrieve U-update D-delete
interface IDao{
    salvar(): boolean;
    alterar(objeto: string): boolean;
    consultar(): string[];
    consultarPorId(id: number): string;
    excluir(id: number): void; //não se retorna no excluir
}
export {IDao}