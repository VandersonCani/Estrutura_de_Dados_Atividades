class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

let lista = new Node(1)

lista.proximo = new Node(2)
lista.proximo.proximo = new Node(3)
lista.proximo.proximo.proximo = new Node(4)

function somaLista(no) {
    // Caso Base, lembrando significa o fim da lista
    if (no === null) {
        return 0
    }

    // recursão, lembrando significa a soma do atual com o resto.
    return no.valor + somaLista(no.proximo)

}

/* soma(1)
= 1 + soma(2)
= 1 + (2 + soma(3))
= 1 + (2 + (3 + soma(4)))
= 1 + (2 + (3 + (4 + soma(null))))
= 1 + 2 + 3 + 4 + 0
= 10 */

console.log(somaLista(lista))