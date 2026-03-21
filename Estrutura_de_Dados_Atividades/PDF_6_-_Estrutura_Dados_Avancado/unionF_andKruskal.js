// =====================================================
// UNION-FIND + KRUSKAL (EX 1 + EX 2)
// =====================================================


// ---------------- UNION-FIND ----------------
class UnionFind {

    constructor(n) {

        // cada elemento começa sendo seu próprio pai
        this.pai = new Array(n)
        this.rank = new Array(n).fill(0)

        for (let i = 0; i < n; i++) {
            this.pai[i] = i
        }
    }

    // função find → encontra o representante do conjunto
    find(x) {

        // path compression (otimização)
        if (this.pai[x] !== x) {
            this.pai[x] = this.find(this.pai[x])
        }

        return this.pai[x]
    }

    // função union → junta dois conjuntos
    union(x, y) {

        let raizX = this.find(x)
        let raizY = this.find(y)

        // se já estão no mesmo conjunto → indica ciclo
        if (raizX === raizY) {
            return false
        }

        // union by rank
        if (this.rank[raizX] < this.rank[raizY]) {
            this.pai[raizX] = raizY
        } else if (this.rank[raizX] > this.rank[raizY]) {
            this.pai[raizY] = raizX
        } else {
            this.pai[raizY] = raizX
            this.rank[raizX]++
        }

        return true
    }
}


// =====================================================
// KRUSKAL (Árvore Geradora Mínima)
// =====================================================

function kruskal(vertices, arestas) {

    // ordena as arestas pelo peso (menor → maior)
    arestas.sort((a, b) => a.peso - b.peso)

    let uf = new UnionFind(vertices)

    let resultado = [] // guarda arestas da árvore mínima

    for (let aresta of arestas) {

        let { origem, destino, peso } = aresta

        // tenta unir os dois vértices
        // se retornar false → ciclo
        if (uf.union(origem, destino)) {
            resultado.push(aresta)
        }
    }

    return resultado
}


// =====================================================
// TESTE (GRAFO)
// =====================================================

// grafo com pesos
let arestas = [
    { origem: 0, destino: 1, peso: 4 },
    { origem: 0, destino: 2, peso: 3 },
    { origem: 1, destino: 2, peso: 1 },
    { origem: 1, destino: 3, peso: 2 },
    { origem: 2, destino: 3, peso: 4 },
    { origem: 3, destino: 4, peso: 2 },
    { origem: 4, destino: 5, peso: 6 }
]

let vertices = 6

let arvoreMinima = kruskal(vertices, arestas)

console.log("Árvore Geradora Mínima:")
console.log(arvoreMinima)


// =====================================================
// TESTE DE CICLO (EX 2)
// =====================================================

let ufTeste = new UnionFind(3)

console.log("Union 0-1:", ufTeste.union(0, 1)) // true
console.log("Union 1-2:", ufTeste.union(1, 2)) // true
console.log("Union 0-2:", ufTeste.union(0, 2)) // false → ciclo


// =====================================================
// TESTE (GRAFO DE EXEMPLO)
// =====================================================

// aqui estamos simulando um grafo com vários vértices conectados por arestas com pesos
// cada objeto representa uma conexão entre dois nós (origem → destino) com um custo (peso)
// Os pesos representam o custo das conexões entre os nós e são definidos na modelagem do grafo. O algoritmo de Kruskal utiliza esses valores para selecionar as arestas de menor custo e construir a árvore geradora mínima.

// =====================================================
// EXECUÇÃO DO KRUSKAL
// =====================================================

// o algoritmo vai:
// 1. ordenar as arestas pelo menor peso
// 2. conectar os nós começando pelas menores arestas
// 3. evitar conexões que formem ciclos

// o resultado final é a Árvore Geradora Mínima,
// ou seja, o conjunto de conexões com menor custo total sem ciclos


// =====================================================
// RESULTADO
// =====================================================

// a saída mostra quais arestas foram escolhidas pelo algoritmo
// essas arestas representam a melhor forma de conectar todos os nós com o menor custo possível


// =====================================================
// TESTE DE CICLO (UNION-FIND)
// =====================================================

// aqui estamos testando manualmente a estrutura Union-Find

// union retorna true → conseguiu unir (não tinha ligação antes)
// union retorna false → já estavam conectados (formaria ciclo)

// exemplo:
// 0-1 → conecta
// 1-2 → conecta
// 0-2 → já estão conectados → ciclo → retorna false

