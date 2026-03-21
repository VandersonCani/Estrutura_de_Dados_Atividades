// ---------------- CONFIGURAÇÃO ----------------
const TAMANHO = 10


// ---------------- FUNÇÃO HASH ----------------
function hash(chave){

    let soma = 0

    for(let i = 0; i < chave.length; i++){
        soma += chave.charCodeAt(i)
    }

    return soma % TAMANHO
}


// =====================================================
// 🔹 TABELA HASH COM ENCADEAMENTO
// =====================================================

let tabelaEncadeada = new Array(TAMANHO).fill(null)

function inserirEncadeado(chave, valor){

    let index = hash(chave)

    if(tabelaEncadeada[index] === null){
        tabelaEncadeada[index] = []
    }

    tabelaEncadeada[index].push({chave, valor})
}


// =====================================================
// 🔹 TABELA HASH COM PROBING LINEAR
// =====================================================

let tabelaProbing = new Array(TAMANHO).fill(null)

function inserirProbing(chave, valor){

    let index = hash(chave)

    while(tabelaProbing[index] !== null){

        index = (index + 1) % TAMANHO
    }

    tabelaProbing[index] = {chave, valor}
}


// =====================================================
// 🔥 TESTE DE COMPARAÇÃO
// =====================================================

// inserindo vários elementos (forçando colisões)
for(let i = 0; i < 20; i++){

    let chave = "chave" + i

    inserirEncadeado(chave, i)
    inserirProbing(chave, i)
}


// ---------------- RESULTADOS ----------------
console.log("===== ENCADEAMENTO =====")
console.log(tabelaEncadeada)

console.log("===== PROBING LINEAR =====")
console.log(tabelaProbing)


/* Probing:
tabela lota rápido
pode entrar em loop se não tiver espaço

encadeamento → aceita colisão e organiza
probing → evita colisão mas sofre quando enche */