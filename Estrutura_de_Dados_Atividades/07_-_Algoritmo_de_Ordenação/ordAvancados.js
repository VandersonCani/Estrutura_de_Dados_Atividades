// =====================================================
// ALGORITMOS DE ORDENAÇÃO AVANÇADOS
// =====================================================


// ---------------- MERGE SORT ----------------
function mergeSort(arr){

    // caso base: array com 1 elemento já está ordenado
    if(arr.length <= 1) return arr

    // divide o array ao meio
    let meio = Math.floor(arr.length / 2)

    let esquerda = mergeSort(arr.slice(0, meio))
    let direita = mergeSort(arr.slice(meio))

    // junta as duas partes ordenadas
    return merge(esquerda, direita)
}


// função auxiliar para juntar os arrays
function merge(esq, dir){

    let resultado = []

    // compara os elementos das duas listas
    while(esq.length && dir.length){

        if(esq[0] < dir[0]){
            resultado.push(esq.shift())
        } else {
            resultado.push(dir.shift())
        }
    }

    // adiciona o restante (se sobrar algo)
    return [...resultado, ...esq, ...dir]
}

/*
Funcionamento Merge Sort:

- Baseado em divisão e conquista

Passos:
1. Divide o array em duas partes
2. Ordena cada parte recursivamente
3. Junta (merge) as partes já ordenadas

- O segredo está na função merge:
  → sempre compara os menores elementos
  → monta um novo array ordenado

Complexidade:
O(n log n) → sempre

Estável → mantém ordem de valores iguais
*/


// ---------------- QUICK SORT ----------------
function quickSort(arr){

    // caso base
    if(arr.length <= 1) return arr

    // escolhe o pivô (primeiro elemento)
    let pivo = arr[0]

    // separa os menores e maiores
    let menores = arr.slice(1).filter(x => x <= pivo)
    let maiores = arr.slice(1).filter(x => x > pivo)

    // recursão + montagem final
    return [...quickSort(menores), pivo, ...quickSort(maiores)]
}

/*
Funcionamento Quick Sort:

- Também usa divisão e conquista

Passos:
1. Escolhe um pivô
2. Divide o array em:
   → menores que o pivô
   → maiores que o pivô
3. Aplica recursivamente

- No final junta tudo:
  menores + pivô + maiores

Complexidade:
O(n log n) → médio caso
O(n²) → pior caso (pivô ruim)

Não estável
*/


// ---------------- TESTE ----------------
let numeros = [64, 25, 12, 22, 11]

console.log("Merge:", mergeSort([...numeros]))
console.log("Quick:", quickSort([...numeros]))


// =====================================================
// RESUMO GERAL
// =====================================================

/*
merge → divide e junta ordenando
quick → divide usando pivô

ambos são mais eficientes que os simples:

simples → O(n²)
avançados → O(n log n)

diferença:

merge → mais previsível (sempre O(n log n))
quick → mais rápido na prática, mas pode piorar
*/