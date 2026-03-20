// implementação simples de um Max-Heap usando array
class MaxHeap {

    constructor(){
        // array que representa o heap
        this.heap = []
    }

    // função para inserir um valor
    inserir(valor){

        // adiciona no final
        this.heap.push(valor)

        // reorganiza o heap (subir o valor)
        this.subir()
    }

    // função para subir o elemento inserido
    subir(){

        let index = this.heap.length - 1

        // enquanto não estiver na raiz
        while(index > 0){

            let pai = Math.floor((index - 1) / 2)

            // se o pai for maior, está ok
            if(this.heap[pai] >= this.heap[index]) break

            // troca pai com filho
            [this.heap[pai], this.heap[index]] = [this.heap[index], this.heap[pai]]

            index = pai
        }
    }

    // remove o maior elemento (raiz)
    remover(){

        if(this.heap.length === 1) return this.heap.pop()

        let raiz = this.heap[0]

        // move o último para a raiz
        this.heap[0] = this.heap.pop()

        // reorganiza descendo
        this.descer(0)

        return raiz
    }

    // função para descer o elemento
    descer(index){

        let tamanho = this.heap.length

        while(true){

            let esquerda = 2 * index + 1
            let direita = 2 * index + 2
            let maior = index

            // verifica filho esquerdo
            if(esquerda < tamanho && this.heap[esquerda] > this.heap[maior]){
                maior = esquerda
            }

            // verifica filho direito
            if(direita < tamanho && this.heap[direita] > this.heap[maior]){
                maior = direita
            }

            // se já estiver correto, para
            if(maior === index) break

            // troca
            [this.heap[index], this.heap[maior]] = [this.heap[maior], this.heap[index]]

            index = maior
        }
    }
}


// teste
let heap = new MaxHeap()

heap.inserir(10)
heap.inserir(5)
heap.inserir(20)
heap.inserir(1)

console.log(heap.heap) // heap organizado
console.log("Removido:", heap.remover()) // maior valor