// tamanho da tabela
const TAMANHO = 10

// tabela hash (encadeamento)
let tabela = new Array(TAMANHO).fill(null)


// função hash para string
function hash(chave){

    let soma = 0

    for(let i = 0; i < chave.length; i++){
        soma += chave.charCodeAt(i)
    }

    return soma % TAMANHO
}


// função para adicionar palavra ao dicionário
function adicionar(palavra, significado){

    let index = hash(palavra)

    // se não tiver lista, cria
    if(tabela[index] === null){
        tabela[index] = []
    }

    // verifica se já existe a palavra
    for(let item of tabela[index]){
        if(item.palavra === palavra){
            item.significado = significado
            return
        }
    }

    // adiciona nova palavra
    tabela[index].push({palavra, significado})
}


// função para buscar significado
function buscar(palavra){

    let index = hash(palavra)

    if(tabela[index] === null){
        return "Palavra não encontrada"
    }

    for(let item of tabela[index]){
        if(item.palavra === palavra){
            return item.significado
        }
    }

    return "Palavra não encontrada"
}


// função para remover palavra
function remover(palavra){

    let index = hash(palavra)

    if(tabela[index] === null){
        return false
    }

    for(let i = 0; i < tabela[index].length; i++){

        if(tabela[index][i].palavra === palavra){

            tabela[index].splice(i, 1)
            return true
        }
    }

    return false
}


// ---------------- TESTES ----------------

// adicionando palavras
adicionar("hash", "função que gera índice")
adicionar("array", "estrutura de dados linear")
adicionar("grafo", "estrutura de nós conectados")

// colisão proposital
adicionar("abc", "teste1")
adicionar("cba", "teste2")


// buscando
console.log("Buscar hash:", buscar("hash"))
console.log("Buscar grafo:", buscar("grafo"))
console.log("Buscar abc:", buscar("abc"))

// palavra inexistente
console.log("Buscar árvore:", buscar("arvore"))


// removendo
console.log("Remover array:", remover("array"))

// testando novamente
console.log("Buscar array:", buscar("array"))


// mostrando tabela completa
console.log("Tabela:", tabela)