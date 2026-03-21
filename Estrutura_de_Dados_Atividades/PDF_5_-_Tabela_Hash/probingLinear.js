// tamanho da tabela
const TAMANHO = 10

// tabela começa com null em todas posições
let tabela = new Array(TAMANHO).fill(null)


// função hash simples
function hash(chave){

    if(typeof chave === "number"){
        return chave % TAMANHO
    }

    let soma = 0

    for(let i = 0; i < chave.length; i++){
        soma += chave.charCodeAt(i)
    }

    return soma % TAMANHO
}


// função de inserção com probing linear
function inserir(chave, valor){

    let index = hash(chave)

    // enquanto a posição estiver ocupada, procura a próxima
    while(tabela[index] !== null){

        // se a chave já existir, atualiza o valor
        if(tabela[index].chave === chave){
            tabela[index].valor = valor
            return
        }

        // vai para próxima posição (linear)
        index = (index + 1) % TAMANHO
    }

    // encontrou posição livre
    tabela[index] = {chave, valor}
}


// função de busca
function buscar(chave){

    let index = hash(chave)

    // percorre até encontrar posição vazia
    while(tabela[index] !== null){

        if(tabela[index].chave === chave){
            return tabela[index].valor
        }

        index = (index + 1) % TAMANHO
    }

    return null
}


// função de remoção
function remover(chave){

    let index = hash(chave)

    while(tabela[index] !== null){

        if(tabela[index].chave === chave){

            // remove colocando null
            tabela[index] = null
            return true
        }

        index = (index + 1) % TAMANHO
    }

    return false
}


// ---------------- TESTES ----------------

inserir("nome", "Vanderson")
inserir("idade", 25)
inserir("cidade", "Joinville")

// colisão proposital
inserir("abc", "teste1")
inserir("cba", "teste2")

console.log("Buscar nome:", buscar("nome"))
console.log("Buscar abc:", buscar("abc"))

console.log("Remover idade:", remover("idade"))
console.log("Buscar idade:", buscar("idade"))

console.log("Tabela:", tabela)