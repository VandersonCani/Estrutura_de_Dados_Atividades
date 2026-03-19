// estrutura do nó da lista encadeada
class Node {
    constructor(valor){
        this.valor = valor
        this.proximo = null
    }
}

// criação da lista encadeada
let lista = new Node(1)

lista.proximo = new Node(2)
lista.proximo.proximo = new Node(3)
lista.proximo.proximo.proximo = new Node(4)

//        [1] → [2] → [3] → [4] → null


// função recursiva para contar os nós
function contarNos(no){

    // caso base → fim da lista
    if(no === null){
        return 0
    }

    // recursão → conta o nó atual + resto da lista
    return 1 + contarNos(no.proximo)
}


// execução
console.log("Quantidade de nós:", contarNos(lista))

// complexidade O(n)