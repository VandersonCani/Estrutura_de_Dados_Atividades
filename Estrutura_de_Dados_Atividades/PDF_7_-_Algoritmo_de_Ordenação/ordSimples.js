// =====================================================
// ALGORITMOS DE ORDENAÇÃO SIMPLES
// =====================================================


// ---------------- SELECTION SORT ----------------
function selectionSort(arr){

    // percorre todo o array
    for(let i = 0; i < arr.length - 1; i++){

        // assume que o menor valor está na posição atual
        let minIndex = i

        // percorre o restante do array para encontrar o menor valor
        for(let j = i + 1; j < arr.length; j++){

            // se encontrar um valor menor, atualiza o índice do menor
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        // após encontrar o menor valor da "rodada",
        // troca com a posição atual (i)
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    // retorna o array ordenado
    return arr
}

/*
Funcionamento Selection Sort:

- Divide o array em duas partes:
  → parte ordenada (início)
  → parte não ordenada (restante)

- A cada rodada:
  → encontra o menor valor da parte não ordenada
  → troca com a posição atual

- Não se preocupa com posições intermediárias,
  apenas garante que o menor vá para o início

Complexidade:
O(n²) → sempre
*/


// ---------------- INSERTION SORT ----------------
function insertionSort(arr){

    // começa do segundo elemento (índice 1)
    for(let i = 1; i < arr.length; i++){

        // valor atual que será inserido na posição correta
        let atual = arr[i]

        // começa comparando com o elemento anterior
        let j = i - 1

        // move os elementos maiores para frente
        while(j >= 0 && arr[j] > atual){
            arr[j + 1] = arr[j]
            j--
        }

        // insere o valor atual na posição correta
        arr[j + 1] = atual
    }

    return arr
}

/*
Funcionamento Insertion Sort:

- Funciona como organizar cartas na mão

- A cada elemento:
  → compara com os anteriores
  → desloca os maiores para frente
  → insere na posição correta

- Mantém parte do array sempre ordenada

Complexidade:
O(n²) → pior caso
O(n) → melhor caso (já ordenado)

Estável → mantém ordem de valores iguais
*/


// ---------------- BUBBLE SORT ----------------
function bubbleSort(arr){

    // percorre o array várias vezes
    for(let i = 0; i < arr.length - 1; i++){

        // percorre comparando pares lado a lado
        for(let j = 0; j < arr.length - i - 1; j++){

            // se estiver fora de ordem, troca
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr
}

/*
Funcionamento Bubble Sort:

- Compara elementos vizinhos

- Se estiverem fora de ordem:
  → realiza troca

- A cada rodada:
  → o maior valor "sobe" para o final (como uma bolha)

- Repete até tudo estar ordenado

Complexidade:
O(n²) → sempre

Estável → mantém ordem de valores iguais
*/


// ---------------- TESTE ----------------
let numeros = [64, 25, 12, 22, 11]

// usamos [...numeros] para não alterar o array original
console.log("Selection:", selectionSort([...numeros]))
console.log("Insertion:", insertionSort([...numeros]))
console.log("Bubble:", bubbleSort([...numeros]))


// =====================================================
// RESUMO GERAL
// =====================================================

/*
selection → procura o menor e coloca na frente
insertion → insere cada elemento na posição correta
bubble → troca elementos vizinhos até ordenar

todos são O(n²), porém:

insertion → melhor em listas pequenas ou quase ordenadas
bubble → mais simples (didático)
selection → menos trocas, mas mais comparações
*/