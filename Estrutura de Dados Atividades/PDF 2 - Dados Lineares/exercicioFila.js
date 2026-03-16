class Fila {
    constructor() {
    // Constructor que é chamado sempre que iniciamos a instancia de Fila
        this.itens = []
    }

    enqueue(valor) {
    // enqueue é Entrar na fila, essa função vai tratar de posicionar o valor recebido na proxima posição disponivel na fila.
        this.itens.push(valor);
    }

    dequeue() {
        // dequeue é a função responsavel por retirar o valor do inicio da fila através do método shift (esse método tem complexidade O(n)). 
        return this.itens.shift();
    }

    peek() {
        // peek é responsável por olhar qual é o valor que está no inicio da fila, conforme o 0 descrito no array.
        return this.itens[0]
    }

    isEmpty() {
        // função que verifica se a fila está vazia.
        return this.itens.length === 0;
    }
}

// criação da instancia fila
const fila = new Fila();

// adicionando valores na fila na sequencia das linhas
fila.enqueue("João");
fila.enqueue("Maria");
fila.enqueue("Carlos");


// verificando qual o primeiro valor da fila
console.log("Primeiro: ", fila.peek());
// removendo o primeiro valor da fila
console.log("Atendido: ", fila.dequeue());
// verificando qual é o novo "primeiro" valor da fila
console.log("Primeiro Agora: ", fila.peek());
