function hashMelhorada(str, tamanho){

    let hash = 0

    for(let i = 0; i < str.length; i++){

        // multiplicação por número primo melhora distribuição
        hash = (hash * 31 + str.charCodeAt(i)) % tamanho
    }

    return hash
}


// teste de distribuição
let tabela = new Array(100).fill(0)

for(let i = 0; i < 1000; i++){

    let chave = "chave" + i

    let index = hashMelhorada(chave, 100)

    tabela[index]++
}

console.log("Distribuição:", tabela)


/* 
A função hash melhorada utiliza multiplicação por um número primo para gerar uma distribuição mais uniforme dos índices.

Isso reduz a quantidade de colisões em comparação com funções simples, como a soma dos valores ASCII.

Uma boa função hash deve distribuir os dados de forma uniforme na tabela, evitando concentrações em determinados índices. */