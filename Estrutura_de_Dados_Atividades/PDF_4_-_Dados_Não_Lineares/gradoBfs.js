// estrutura do grafo (sem pesos)
let grafo = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C"]
}


// função BFS
// percorre o grafo por níveis usando fila
function bfs(grafo, inicio){

    // fila começa com o nó inicial
    let fila = [inicio]

    // guarda os nós já visitados
    let visitados = new Set()

    // enquanto houver elementos na fila
    while(fila.length > 0){

        // remove o primeiro da fila
        let no = fila.shift()

        // se ainda não foi visitado
        if(!visitados.has(no)){

            // mostra o nó atual
            console.log(no)

            // marca como visitado
            visitados.add(no)

            // adiciona os vizinhos na fila
            for(let vizinho of grafo[no]){
                fila.push(vizinho)
            }
        }
    }
}


// execução
console.log("BFS:")
bfs(grafo, "A")