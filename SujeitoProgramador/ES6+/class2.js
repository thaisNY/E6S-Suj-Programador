class Pessoa{
    constructor(){
        this.nome = '' ;
        this.sobrenome = '';
    }

    nomePessoa(primeironome){
        this.nome = primeironome;
        console.log('Meu nome eh:' + this.nome);
    }

    segundoNome(segundonome){
        this.sobrenome = segundonome;
        console.log('Meu sobrenome eh: '+ this.sobrenome);
    }
    nomeCompleto(){
        let nomeCompleto = this.nome + ' ' + this.sobrenome;
        console.log(nomeCompleto);
    }
};

let pessoa1 = new Pessoa();
pessoa1.nomePessoa('Matheus');
pessoa1.segundoNome('Fraga');
pessoa1.nomeCompleto();

