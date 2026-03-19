class Node {
    // declaração da estrutura dos nós
    constructor(valor){
        this.valor = valor
        this.esquerda = null
        this.direita = null
    }
}

// Criação da Árvore Binária
let raiz = null

raiz = inserir(raiz, 4)
raiz = inserir(raiz, 2)
raiz = inserir(raiz, 6)
raiz = inserir(raiz, 1)
raiz = inserir(raiz, 3)
raiz = inserir(raiz, 5)
raiz = inserir(raiz, 7)

function inserir(no, valor){

    // se o nó for nulo ele retorna um novo nó que adquire o valor de valor.
    if(no === null){
        return new Node(valor)
    }

    // se valor for menor que o valor do nó, ele insere o valor no nó da esquerda
    if(valor < no.valor){
        no.esquerda = inserir(no.esquerda, valor)
    } else {
        // se não for menor que o valor do nó ele vai inserir na direita, esse tipo de inserção muito provavelmente facilita aquele tipo de busca, valores menores pra esquerda e maiores pra direita.
        no.direita = inserir(no.direita, valor)
    }

    return no
}



/* remover em BST =

1. encontrar o nó
2. tratar 3 casos
   - 0 filhos → remove
   - 1 filho → substitui
   - 2 filhos → troca pelo menor da direita */

function remover(no, valor){

    if(no === null) return null

   
    if(valor < no.valor){
        no.esquerda = remover(no.esquerda, valor)
    } else if(valor > no.valor){
        no.direita = remover(no.direita, valor)
    } else {

        if(no.esquerda === null) return no.direita
        if(no.direita === null) return no.esquerda

        let menor = no.direita
        while(menor.esquerda !== null){
            menor = menor.esquerda
        }

        no.valor = menor.valor
        no.direita = remover(no.direita, menor.valor)
    }

    return no
}

function buscar (no,valor) {
    // nó vazio retorna false
    if(no === null) {
        return false
    }

    // nó.valor for igual valor retorna true
    if(no.valor === valor){
        return true
    }
    
    // valor for menor que nó.valor, realiza a busca a esquerda
    if(valor < no.valor){
        return buscar(no.esquerda, valor)
    }
    // nenhum if anterior é chamado ele realiza a busca a direita.
    return buscar(no.direita, valor)

}

console.log(buscar(raiz, 5)) // true
console.log(buscar(raiz, 10)) // false