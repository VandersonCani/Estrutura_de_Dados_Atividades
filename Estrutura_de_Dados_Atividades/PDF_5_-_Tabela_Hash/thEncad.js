// tamanho da tabela hash
const TAMANHO = 10

// criação da tabela (array vazio)
let tabela = new Array(TAMANHO).fill(null)


// função de hash (simples)
// transforma a chave em um índice da tabela
function hash(chave){

    // se for número
    if(typeof chave === "number"){
        return chave % TAMANHO
    }

    // se for string
    let soma = 0

    for(let i = 0; i < chave.length; i++){
        soma += chave.charCodeAt(i)
    }

    return soma % TAMANHO
}


// função para inserir elementos na tabela
function inserir(chave, valor){

    // calcula o índice usando a função hash
    let index = hash(chave)

    // se a posição estiver vazia, cria uma lista
    if(tabela[index] === null){
        tabela[index] = []
    }

    // adiciona o par (chave, valor) na lista
    tabela[index].push({chave, valor})

    // observação: aqui estamos usando encadeamento
    // ou seja, se tiver colisão, vai criando uma lista no mesmo índice
}


// função para buscar um valor pela chave
function buscar(chave){

    // calcula o índice
    let index = hash(chave)

    // se não existir nada nesse índice, retorna null
    if(tabela[index] === null){
        return null
    }

    // percorre a lista naquele índice
    for(let item of tabela[index]){

        // se encontrar a chave, retorna o valor
        if(item.chave === chave){
            return item.valor
        }
    }

    // se não encontrar, retorna null
    return null
}


// função para remover um elemento
function remover(chave){

    let index = hash(chave)

    if(tabela[index] === null){
        return false
    }

    // percorre a lista para encontrar a chave
    for(let i = 0; i < tabela[index].length; i++){

        if(tabela[index][i].chave === chave){

            // remove o elemento da lista
            tabela[index].splice(i, 1)

            return true
        }
    }

    return false
}


// ---------------- TESTES ----------------

// inserindo valores
inserir("nome", "Vanderson")
inserir("idade", 25)
inserir("cidade", "Joinville")

// teste de colisão
inserir("abc", "teste1")
inserir("cba", "teste2")


// buscando valores
console.log("Buscar nome:", buscar("nome"))
console.log("Buscar idade:", buscar("idade"))
console.log("Buscar abc:", buscar("abc"))


// removendo valor
console.log("Remover idade:", remover("idade"))

// testando novamente
console.log("Buscar idade:", buscar("idade"))


// mostrando tabela completa
console.log("Tabela:", tabela)

/* hash de tabela → organização
hash de segurança → proteção */