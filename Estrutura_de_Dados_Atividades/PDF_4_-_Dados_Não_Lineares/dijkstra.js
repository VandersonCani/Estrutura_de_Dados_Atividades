// estrutura do grafo com pesos
// agora cada ligação tem um custo
let grafo = {
    A: {B: 1, C: 4},
    B: {C: 2, D: 5},
    C: {D: 1},
    D: {}
}


// função Dijkstra
function dijkstra(grafo, inicio){

    // guarda as menores distâncias
    let distancias = {}

    // guarda nós visitados
    let visitados = new Set()

    // inicializa tudo com infinito
    for(let no in grafo){
        distancias[no] = Infinity
    }

    // ponto inicial começa com 0
    distancias[inicio] = 0

    while(true){

        let noAtual = null
        let menorDistancia = Infinity

        // encontra o nó com menor distância ainda não visitado
        for(let no in distancias){
            if(!visitados.has(no) && distancias[no] < menorDistancia){
                menorDistancia = distancias[no]
                noAtual = no
            }
        }

        // se não tiver mais nós, encerra
        if(noAtual === null) break

        // marca como visitado
        visitados.add(noAtual)

        // percorre os vizinhos
        for(let vizinho in grafo[noAtual]){

            let peso = grafo[noAtual][vizinho]

            // calcula nova distância
            let novaDistancia = distancias[noAtual] + peso

            // atualiza se for menor
            if(novaDistancia < distancias[vizinho]){
                distancias[vizinho] = novaDistancia
            }
        }
    }

    return distancias
}


// execução
let resultado = dijkstra(grafo, "A")

console.log("Menores distâncias:")
console.log(resultado)