class Pilha {
    // classe pilha criada
    // constructor será chamado sempre que uma instancia de pilha for criada

    constructor(tamanho) {
        // sempre que a instancia for criada ela recebe um parametro (tamanho)que estará em formato numérico
        this.tamanho = tamanho;
        // aqui estará definido os itens inseridos dentro de Pilha
        this.itens = [];
    }

    // Abaixo está a função que compara itens para verificar se Pila está vazio
    isEmpty() {
        return this.itens.length === 0;
    }
    // Abaixo está a função que compara itens para verificar se Pila está cheio
    isFull() {
        return this.itens.length === this.tamanho;
    }

    push(valor) {
        // abaixo está a função que identifica que o array chegou a capacidade maxima definida em tamanho. 
        if (this.isFull()) {
            // aviso de pilha cheia
            console.log("Pilha cheia");
            return;
        }
        // Abaixo está a função que adiciona determinado dado ao array itens.

        this.itens.push(valor);
    }

    pop() {
        // Aqui temos a função que identifica que não é possivel excluir poi a pilha está vazia.
        if (this.isEmpty()) {
            console.log("Pilha vazia");
            return null;
        }
        // Abaixo está a função que remove algum dado do topo

        return this.itens.pop();
    }

    peek() {
        // aqui temos uma condicional que caso a função "está vazio" seja verdadeira, ele retorna null.
        if (this.isEmpty()) {
            return null;
        }
        // quando o isempty nao for verdadeira ele buscara os itens utilizando o this.itens.length -1, ou seja,ultimo indice adicionado -1
        return this.itens[this.itens.length - 1];
    }
}

function verificarParenteses(expressao) {

    const pilha = [];

    // para variavel char de expressão

    // obs char pois vamos avaliar caractere por caracter conforme sua posição nos indices para comparar se todos parenteses de abertura tem o equivalente ao seus parenteses de fechamento.

    for (let char of expressao) {

        if (char === "(") {
            pilha.push(char);
        }

        if (char === ")") {

            if (pilha.length === 0) {
                return false;
            }

            pilha.pop();
        }
    }
    // pilha adiciona parenteses de abertura e quando encontra parenteses de fechamento ela remove um de abertura da pilha, assim ao final da comparação pilha.length deve ser iguala 0.
    return pilha.length === 0;
}

console.log(verificarParenteses("((1+2)*(3/4))"));
console.log(verificarParenteses("((1+2)*(3/4)"));

const pilha = new Pilha(5);

pilha.push(10);
pilha.push(20);
pilha.push(30);

console.log("Topo:", pilha.peek());

console.log("Removido:", pilha.pop());

console.log("Topo atual:", pilha.peek());