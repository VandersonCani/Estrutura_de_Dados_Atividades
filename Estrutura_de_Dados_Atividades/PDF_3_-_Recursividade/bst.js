class Node {
    // declaração da estrutura dos nós
    constructor(valor){
        this.valor = valor
        this.esquerda = null
        this.direita = null
    }
}

// montagem da arvore
let raiz = new Node(4)
// nó a esquerda da raiz principal
raiz.esquerda = new Node(2)
// nó a direita da raiz principal
raiz.direita = new Node(6)

// nó a esquerda.esquerda da raiz principal
raiz.esquerda.esquerda = new Node(1)
// nó a esquerda.direita da raiz principal
raiz.esquerda.direita = new Node(3)

// nó a direita.esquerda da raiz principal
raiz.direita.esquerda = new Node(5)
// nó a direita.direita da raiz principal
raiz.direita.direita = new Node(7)


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

console.log("Buscar 5:", buscar(raiz, 5))
console.log("Buscar 10:", buscar(raiz, 10))

// A complexidade desse tipo de busca é O(log n)