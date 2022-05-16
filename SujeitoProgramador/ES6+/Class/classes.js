class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
//está herdando list
class ListaTarefas extends List{
    constructor(){
        super();

        this.nome = "Matheus";
    }
    mostrarNome(){
        console.log(this.nome);
    }
};

const minhasTarefas = new ListaTarefas();
document.getElementById('novo').onclick = function(){
    minhasTarefas.add("Minha Tarefa");
}
minhasTarefas.mostrarNome();