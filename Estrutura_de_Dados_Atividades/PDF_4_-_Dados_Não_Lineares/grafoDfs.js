// estrutura do grafo (sem pesos)
let grafo = {
    A: ["B", "C"], // A conectado com B e C
    B: ["A", "D"], // B conectado com A e D
    C: ["A", "D"], // C conectado com A e D
    D: ["B", "C"]  // D conectado com B e C
}


// função DFS
// percorre o grafo indo o mais fundo possível antes de voltar
function dfs(grafo, no, visitados = new Set()){

    // se o nó já foi visitado, não percorre novamente
    if(visitados.has(no)) return

    // mostra o nó atual
    console.log(no)

    // marca como visitado
    visitados.add(no)

    // percorre todos os vizinhos do nó
    for(let vizinho of grafo[no]){
        dfs(grafo, vizinho, visitados)
    }
}


// execução
console.log("DFS:")
dfs(grafo, "A")