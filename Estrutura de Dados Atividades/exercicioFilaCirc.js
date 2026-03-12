class FilaCircular {
    // constructor que será chamado criando o modelo da instancia da fila circular, quando iniciamos a nova instancia, enviamos 5 como parametro para tamanho.
    constructor(tamanho) {
        // meu item é um novo array de tamanho "5"
        this.itens = new Array(tamanho);
        // minha variavel tamanho é igual o parametro tamanho.
        this.tamanho = tamanho;
        // minha frente da fila será sempre -1 (inicialmente)para atuar na equação e iniciar de 0.
        this.front = -1;
        // o final da fila também inicia com -1, vamos imaginar que um comercio abriu agora e que entre alguem na fila, então o final da fila e o começo da fila apontam para a mesma pessoa, porém com ausencia de atendimento, o Rear(fundo) da fila continua avançando (mais pessoas entrando na fila) enquanto que o front, fica parado, ambos iniciam na mesma posição, e depois cada um trabalha conforme sua necessidade. 
        this.rear = -1;
    }

    // essa função é chamada quando a fila está vazia, retornando o front para -1 iniciando, aguardando o inicio do novo ciclo.
    isEmpty() {
        return this.front === -1;
    }

    // essa função é usada para verificar se a fila está cheia, nessa etapa comparamos os ponteiros do front e do rear, lembre-se quando adicionamos um item ao array adicionamos através do Rear, inicialmente o front e rear apontam para a mesma pessoa, depois os ponteiros se separam e o rear não pode "alcançar" o front no loop.
    isFull () {
        return (this.front === (this.rear + 1) % this.tamanho);
    }

    // nessa função adicionaremos o valor recebido como parametro, no primeiro if estamos verificando se a fila está cheia através da chamada de isFull dentro do método if.
    enqueue(valor) {
        if (this.isFull()) {
            console.log("Fila cheia")
            return;
        }

        // quando a fila estiver vazia durante a sequencia logica, ambos ponteiros, front e rear, estarão apontando para o mesmo indice. isso chamará
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            // se não estiver vazia, o fundo vai continuar avançando acrescentando mais valores aos indices livres.
            this.rear = (this.rear + 1) % this.tamanho;
        }
        // quando sai do if ele adiciona o valor para onde o ponteiro rear(fundo), está apontando.
        this.itens[this.rear] = valor;
    }

    // nessa função o dequeue vai retirando da fila as "pessoas" que já foram atendidas.
    dequeue() {
        // aqui identificamos que a fila está vazia e exibimos um console log com a mensagem "FIla Vazia".
        if (this.isEmpty()) {
            console.log("Fila Vazia");
            return;
        }
        // Definição da variavel valor, ela vai encontrar o valor do item (nosso array) no indice que eestá sendo apontado pelo front.
        let valor = this.itens[this.front];
        
        // depois que definimos para onde o front está apontando e descobrimos o real valor de "valor", entramos no if que identifica se o front e rear (resolvidos pela equação), forem iguais, volta ao estágio inicial dos ponteiros, ambos -1.
        if(this.front === this.rear) {

            this.front = -1;
            this.rear = -1;
        } else {
            // Se não o front vai resolver aquela equação que frita a mente até entender, vai descobrir o valor do indice através do resto da divisão, e vai remover da fila o arquivo, afinal estamos na função DEQUEUE.
            this.front = (this.front + 1) % this.tamanho;
        }
        // retorna o valor para demonstrar o que foi removido.
        return valor;
    }
}

// como nos exercicios anteriores, inicio de instancia, adição de valores a fila, remoção e exibição.
const fila = new FilaCircular(5);

fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);
fila.enqueue(40);

console.log(fila.itens);

console.log("Removido:", fila.dequeue());

console.log(fila.itens);

fila.enqueue(50);
fila.enqueue(60);

console.log(fila.itens);