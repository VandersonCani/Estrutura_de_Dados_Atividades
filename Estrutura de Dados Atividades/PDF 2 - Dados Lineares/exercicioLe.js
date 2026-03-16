// Exercicio de Lista Encadeada
// Aqui criamos uma classe para Acrecentar um nó que estará apontando para um Valor
class Node {
    // Aqui a function construtora utiliza this.valor ou seja o valor recebido vai ser adicionado na memória ao parametro valor. 

    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}
class ListaEncadeada {
    constructor() {
        this.head = null;
    }

    buscar (valor) {
        //Começamos a busca pelo começo da lista
        let atual = this.head;
        let posicao = 0;

        //Percorremos nós até chegar ao final
        while (atual !== null) {
            // se o valor dentro do nó for igual ao valor da busca ele retorna a posição do nó

            if (atual.valor === valor) {
                return posicao;
            
            }
            // termina de percorrer a lista pois a posição já foi encontrada
            atual = atual.proximo;
            posicao++;
        }
        // se nenhum valor for encontrado então vai retornar -1
        return -1;
    }

    removerPosicao(posicao) {
        if (this.head === null) {
            return;
            // Se não houver nenhum dado a ser removido Retorna
        }

        if(posicao === 0) {
            this.head = this.head.proximo;
            return;
            // Remover o primeiro nó
        }

        //declara a variavel atual com o dado do nó head.
        let atual = this.head;
        // declara anterior como nula
        let anterior = null;
        // declara indice como 0
        let indice = 0;

        // acredito que as etapas declaradas acima são para acrescentar em um indice de memoria, que fará a manipulação dos dados, 

        // Quando o valor de atual for diferente de nulo E o indice for menor que a posicao, então o anterior será a atual, e o atual será igual o proximo, e o indice sobe para continuar adicionando os proximos ao indice anterior, pois um nó foi removido então todos nós recuam no indice. 
        while (atual !== null && indice < posicao) {
            anterior = atual;
            atual = atual.proximo;
            indice++;
        }

        // quando atual for igual a null o indice terminou de recuar as informações dentro dele, então pode ser retornado.
        if (atual === null) {
            return;
        }
        anterior.proximo = atual.proximo;
    }

    inserirFinal(valor) {
        const novo = new Node(valor);

        if (this.head === null) {
            this.head = novo;
            return;
        }

        let atual = this.head;

        while (atual.proximo !== null) {
            atual = atual.proximo;
        }
        atual.proximo = novo;
    }

    imprimirLista() {
        let atual = this.head;

        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}
// Ao reproduzir apenas com a estrutura acima, nada aparece no terminal, pois até o momento nada chama as classes para executar alguma coisa

const lista = new ListaEncadeada();

console.log(lista);

// Porém após criar a constante lista se referindo a ela uma Nova Lista Encadeada, e apresentar através do console.log, aparecerá o que há na lista, que até o momento é nada, como sabemos o inicio de uma lista encadeada se chama head , então visualmente esperamos um resultado semelhante a esse ListaEncadeada { head: null }

lista.inserirFinal(10);
lista.inserirFinal(20);
lista.inserirFinal(30);
lista.inserirFinal(40);

console.log("Posição:", lista.buscar(30));
lista.imprimirLista();