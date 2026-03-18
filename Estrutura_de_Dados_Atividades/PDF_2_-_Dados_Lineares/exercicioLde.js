class Node {
    // cria-se a estrutura basica para a lista duplamente encadeada, com ponteiros para próximo e anterior
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDupla {
    constructor() {
        // estabelecido que há ponteiro para apontar para o inicio e para o fim, ainda nulos nessa etapa.
        this.head = null;
        this.tail = null;
    }

    inserirInicio(valor) {
        // iniciado uma constante novo que recebe valor e acrescenta em head e tail (agora ambos ponteiros de inicio e fim apontam para o mesmo nó, pois ainda há somente uma informação guardada)
        const novo = new Node(valor);
        if (this.head === null) {
            this.head = novo;
            this.tail = novo;
            return;
        }

        // aqui dizemos que o nó que era o primeiro da lista (head) agora terá um anterior(anterior), que recebera o valor atribuido a novo na criação da constante. Ou seja, aqui estamos ajustando o ponteiro de anterior do que virá a ser nossa antiga head.
        this.head.anterior = novo;
        // portanto meu ponteiro de próximo dessa minha nova constante, será o antigo head.
        novo.proximo = this.head;
        // todavia o meu head recebera o valor de novo nesse momento
        this.head = novo;

    }
    percorrerFrente() {
        // aqui o nosso ponteiro atual recebe o valor de head
        let atual = this.head;
        while (atual !== null) {
            // quando o valor de atual for diferente de null então o console vai mostrar o valor de atual.
            console.log(atual.valor);
            // aqui avançamos o valor de atual buscando o valor que proximo está apontando.
            atual = atual.proximo;
        }
    }

    percorrerTras() {
        // Assim como no percorrer pra frente nosso valor de atual agora recebera o valor para onde tail aponta
        let atual = this.tail;

        while (atual !== null) {
            // então QUANDO tail aponta para um valor diferente de nulo, nosso console log vai mostrar o valor de atual
            console.log(atual.valor);
            // aqui nosso valor de atual vai buscar o valor para onde o anterior do nosso nó atual está apontando, mostrando assim a lista de trás pra frente.
            atual = atual.anterior;
        }
    }
}



// inicia uma nova instancia de uma lista duplamente encadeada
const lista = new ListaDupla();

// insere dados na nova lista
lista.inserirInicio(10);
lista.inserirInicio(20);
lista.inserirInicio(30);

// mostra dados da lista da frente para trás na sequencia 
console.log("Frente:");
lista.percorrerFrente();
// percore a lista de trá pra frente na sequencia.
console.log("Tras:");
lista.percorrerTras();

// observação, como os dados foram adicionadosna sequencia 10 , 20 , 30, a lista puca na frente o ultimo dado adicionado, então considerasse como frente sempre o ultimo dado adicionado, e como trás o primeiro dado adicionado.