class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDupla {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    inserirInicio(valor) {
        const novo = new Node(valor);
        if (this.head === null) {
            this.head = novo;
            this.tail = novo;
            return;
        }

        this.head.anterior = novo;
        novo.proximo = this.head;
        this.head = novo;

    }
    percorrerFrente() {
        let atual = this.head;
        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }

    percorrerTras() {
        let atual = this.tail;

        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.anterior;
        }
    }
}



const lista = new ListaDupla();

lista.inserirInicio(10);
lista.inserirInicio(20);
lista.inserirInicio(30);

console.log("Frente:");
lista.percorrerFrente();

console.log("Tras:");
lista.percorrerTras();