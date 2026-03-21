// função para medir tempo de busca
function testarDesempenho(tamanho){

    let tabela = new Array(tamanho).fill(null)

    function hash(chave){
        let soma = 0
        for(let i = 0; i < chave.length; i++){
            soma += chave.charCodeAt(i)
        }
        return soma % tamanho
    }

    function inserir(chave, valor){
        let index = hash(chave)

        if(tabela[index] === null){
            tabela[index] = []
        }

        tabela[index].push({chave, valor})
    }

    function buscar(chave){
        let index = hash(chave)

        if(tabela[index] === null){
            return null
        }

        for(let item of tabela[index]){
            if(item.chave === chave){
                return item.valor
            }
        }

        return null
    }

    // inserindo dados
    for(let i = 0; i < 500; i++){
        inserir("chave" + i, i)
    }

    // medindo tempo
    console.time("Busca")
    for(let i = 0; i < 500; i++){
        buscar("chave" + i)
    }
    console.timeEnd("Busca")
}


// testes com tamanhos diferentes
testarDesempenho(50)
testarDesempenho(100)
testarDesempenho(250)

/* 
O desempenho da tabela hash melhora conforme o tamanho da tabela aumenta, pois há menos colisões.

Quando a tabela é pequena em relação à quantidade de elementos, ocorre maior número de colisões, o que aumenta o tempo de busca.

Já em tabelas maiores, a distribuição dos elementos é mais uniforme, reduzindo colisões e mantendo a complexidade próxima de O(1). */