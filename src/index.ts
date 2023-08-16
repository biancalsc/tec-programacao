class Pessoa {
    nome: string;
    idade: number;

    constructor(a:string, b:number){
        this.nome = a;
        this.idade = b;
    }

    imprimir(){
        console.log(this.nome, this.idade);
    }
}

const p = new Pessoa("Arley",46);
const q = new Pessoa("Marcelo",23);

p.imprimir();
q.imprimir();