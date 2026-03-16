// construção da estrutura interna de cada nó
class Node {
    constructor(valor) {
        // recebe o valor para dentro de this.valor
        this.valor = valor
        // referencia do nó da esquerda
        this.esquerda = null
        // referencia do nó da direita
        this.direita = null
    }
}

// função que determina a leitura do codigo InOrder, no caso da esquerda > raiz > direita
function inOrder(no) {
    // finalização da leitura quando encontrar que no estiver igual null 
    if(no === null){
        return
    }
    // chamada recursiva esquerda
    inOrder(no.esquerda)

    // processamendo do nó
    console.log(no.valor)

    // chamada recursiva direita
    inOrder(no.direita)
}

//declaração do topo da arvore
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

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

inOrder(raiz)


