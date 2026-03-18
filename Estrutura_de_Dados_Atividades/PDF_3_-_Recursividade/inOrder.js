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

    // processamento do nó
    console.log(no.valor)

    // chamada recursiva direita
    inOrder(no.direita)
}

// função que determina a leitura do codigo InOrder, no caso da esquerda > raiz > direita
function preOrder(no) {
    // finalização da leitura quando encontrar que no estiver igual null 
    if(no === null){
        return
    }
    // mostrar o valor do nó
    console.log(no.valor)

    // chama função preOrder com o nó da esquerda
    preOrder(no.esquerda)

    // chama função preOrder com o nó da direita
    preOrder(no.direita)
}

function postOrder(no) {
    // finalização da leitura quando encontrar que no estiver igual null 
    if(no === null){
        return
    }
    // chama o valor do nó a esquerda
    postOrder(no.esquerda)

    // chama função postOrder com o nó da direita
    postOrder(no.direita)

    // mostra o valor do nó(raiz)
    console.log(no.valor)
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

console.log("inOrder:")
inOrder(raiz)

console.log("PreOrder:")
preOrder(raiz)

console.log("PostOrder:")
postOrder(raiz)
